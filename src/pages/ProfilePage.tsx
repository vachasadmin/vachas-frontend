
import { useEffect } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import ProfileCard from '@/components/profile/ProfileCard';

const ProfilePage = () => {
  useEffect(() => {
    document.title = "Your Profile | Vachas AI";
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
        </div>
        
        <p className="text-muted-foreground max-w-4xl">
          Manage your personal and company information.
        </p>
        
        <div className="max-w-2xl w-full">
          <ProfileCard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
