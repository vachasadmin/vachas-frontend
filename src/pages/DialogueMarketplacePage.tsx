
import DashboardLayout from '@/components/layouts/DashboardLayout';
import DialogueMarketplace from '@/components/dialogue-flows/DialogueMarketplace';

const DialogueMarketplacePage = () => {
  return (
    <DashboardLayout
      title="Dialogue Flows Marketplace"
      subtitle="Browse, clone, and customize community-created dialogue flows"
    >
      <DialogueMarketplace />
    </DashboardLayout>
  );
};

export default DialogueMarketplacePage;
