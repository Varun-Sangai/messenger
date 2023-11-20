'use client';

import clsx from "clsx";

import useConversation from "@/libs/hooks/useConversation";
import EmptyState from "@/components/component/EmptyState";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div className={clsx(
      'lg:pl-80 h-full lg:block', 
      isOpen ? 'block' : 'hidden'
    )}>
      <EmptyState />
    </div>
  )
}

export default Home;