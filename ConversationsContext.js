import React, { createContext, useState, useContext } from 'react';

const ConversationsContext = createContext();

export const ConversationsProvider = ({ children }) => {
  const [conversations, setConversations] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Lista de compras",
      text: "some text",
      updated: "12:50",
      messages: [
        { id: 1, sender: "user", content: "Mensagem 1" }
        // { id: 2, sender: 'other', content: 'I am good. Thanks for asking!' },
        // { id: 3, sender: "user", content: "Mensagem 2" },
      ]
    },
    {
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80",
      title: "Lista de viagem",
      text: "Rio de Janeiro",
      updated: "12:52",
      messages: [
        { id: 1, sender: "user", content: "Rio de Janeiro" },
        { id: 2, sender: "user", content: "São Paulo" }
        // { id: 2, sender: 'other', content: 'I am good. Thanks for asking!' },
        // { id: 3, sender: "user", content: "Mensagem 2" },
      ]
    },
  ]);

  return (
    <ConversationsContext.Provider value={{ conversations, setConversations }}>
      {children}
    </ConversationsContext.Provider>
  );
};

export const useConversations = () => {
  return useContext(ConversationsContext);
};
