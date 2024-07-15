import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">Welcome to 2018 Building Guidelines Co-Pilot 🏥</h1>
      <p className="text-lg italic mb-4">Based on IBC guidelines</p>
      <p className="text-lg italic mb-2">
        <span style={{ textDecoration: 'underline' }}>Version: v3 Beta</span>
    </p>
      <h2 className="text-xl mb-2">💡 New Features:</h2>
      <ul className="list-disc pl-6">
        <li className="text-lg mb-2">✅ Detailed sections of answer origins</li>
        <li className="text-lg">✅ Source references</li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      placeholder={
        'How can I help you today?'
      }
      emoji="🏥"
      titleText="Randall - Your co pilot"
    ></ChatWindow>
  );
}
