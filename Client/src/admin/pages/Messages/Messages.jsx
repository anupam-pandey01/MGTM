import { useEffect, useState } from "react";
import styles from "./Messages.module.css";
import { getContact } from "../../../services/adminServices/adminApi";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const data = await getContact();

      if (data.success) {
        setMessages(data.messages);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <h2>Loading messages...</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Messages</h1>
        <span className={styles.total}>
          {messages.length} Total
        </span>
      </div>

      {messages.length === 0 ? (
        <div className={styles.emptyCard}>
          <p>No messages found.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {messages.map((msg) => (
            <div key={msg._id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>{msg.name}</h3>

                <span className={styles.badge}>
                  {msg.inquiryType}
                </span>
              </div>

              <div className={styles.info}>
                <p>
                  <strong>Email:</strong> {msg.email}
                </p>

                <p>
                  <strong>Phone:</strong> {msg.phone}
                </p>

                {msg.organizationName && (
                  <p>
                    <strong>Organization:</strong>{" "}
                    {msg.organizationName}
                  </p>
                )}
              </div>

              <div className={styles.messageBox}>
                <p>{msg.message}</p>
              </div>

              <div className={styles.footer}>
                {new Date(msg.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;