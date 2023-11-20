import getConversations from "@/libs/actions/getConversations";
import getUsers from "@/libs/actions/getUsers";
import Sidebar from "@/components/component/sidebar/sidebar";
import ConversationList from "@/components/component/ConversationList";
export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const conversations = await getConversations();
  const users = await getUsers();
    // console.log(conversations);
  return (
    <Sidebar>
      <div className="h-screen">
        {users && conversations && <ConversationList 
          users={users} 
          title="Messages" 
          initialItems={conversations}
        />}
        {children}
      </div>
    </Sidebar>
  );
}