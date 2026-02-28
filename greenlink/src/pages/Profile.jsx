import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();

  // Get user data + complaints from navigation state
  const user = location.state?.user || {
    name: "John Doe",
    role: "student",
    email: "john@example.com",
  };

  const complaints = location.state?.complaints || [];

  const total = complaints.length;
  const resolved = complaints.filter((c) => c.status === "resolved").length;
  const pending = complaints.filter((c) => c.status === "pending").length;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2>Profile Page</h2>
        <p style={{ marginBottom: 20 }}>
          Welcome to your GreenLink profile.
        </p>

        {/* User Info */}
        <div style={styles.card}>
          <h3>{user.name}</h3>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        {/* Statistics */}
        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <h4>Total Issues</h4>
            <p>{total}</p>
          </div>

          <div style={styles.statBox}>
            <h4>Resolved</h4>
            <p style={{ color: "#16a34a" }}>{resolved}</p>
          </div>

          <div style={styles.statBox}>
            <h4>Pending</h4>
            <p style={{ color: "#dc2626" }}>{pending}</p>
          </div>
        </div>

        {/* Initiatives Section */}
        <div style={{ marginTop: 30 }}>
          <h3>Initiatives Taken</h3>

          {complaints.length === 0 ? (
            <p>No initiatives submitted yet.</p>
          ) : (
            complaints.map((c) => (
              <div
                key={c.id}
                style={{
                  ...styles.initiativeCard,
                  borderLeft:
                    c.status === "resolved"
                      ? "5px solid #16a34a"
                      : "5px solid #dc2626",
                }}
              >
                <div style={styles.cardHeader}>
                  <strong>{c.title}</strong>
                  <span
                    style={{
                      color:
                        c.status === "resolved"
                          ? "#16a34a"
                          : "#dc2626",
                      fontWeight: 600,
                    }}
                  >
                    {c.status}
                  </span>
                </div>

                <p>{c.description}</p>

                {c.image && (
                  <img
                    src={c.image}
                    alt="initiative"
                    style={styles.image}
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#ecfdf5",
    minHeight: "100vh",
    padding: 20,
  },
  container: {
    maxWidth: 800,
    margin: "0 auto",
  },
  card: {
    background: "#ffffff",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    marginBottom: 20,
  },
  statsContainer: {
    display: "flex",
    gap: 20,
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    background: "#ffffff",
    padding: 15,
    borderRadius: 10,
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  initiativeCard: {
    background: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  image: {
    width: "100%",
    maxHeight: 250,
    objectFit: "cover",
    borderRadius: 8,
    marginTop: 10,
  },
};