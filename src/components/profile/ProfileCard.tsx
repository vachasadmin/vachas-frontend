
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

const ProfileCard = () => {
  const { profile, refreshProfile } = useAuth();
  const { toast } = useToast();
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: profile?.first_name || '',
    lastName: profile?.last_name || '',
    companyName: profile?.company_name || '',
    jobTitle: profile?.job_title || '',
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: formData.firstName,
          last_name: formData.lastName,
          company_name: formData.companyName,
          job_title: formData.jobTitle,
          updated_at: new Date().toISOString(),
        })
        .eq('id', profile?.id);
      
      if (error) throw error;
      
      await refreshProfile();
      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully."
      });
      
      setIsEditing(false);
    } catch (error: any) {
      toast({
        title: "Failed to update profile",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardDescription>
          Manage your personal information
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={isEditing ? formData.firstName : profile?.first_name || ''}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={isEditing ? formData.lastName : profile?.last_name || ''}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={profile?.email || ''}
              readOnly
              disabled
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="Company Name"
                value={isEditing ? formData.companyName : profile?.company_name || ''}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                placeholder="Job Title"
                value={isEditing ? formData.jobTitle : profile?.job_title || ''}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          {isEditing ? (
            <>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </>
          ) : (
            <Button type="button" onClick={() => {
              setFormData({
                firstName: profile?.first_name || '',
                lastName: profile?.last_name || '',
                companyName: profile?.company_name || '',
                jobTitle: profile?.job_title || '',
              });
              setIsEditing(true);
            }}>
              Edit Profile
            </Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
};

export default ProfileCard;
