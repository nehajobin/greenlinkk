export default function Home() {
  const posts = [
    {
      id: 1,
      campus: "Greenfield University",
      title: "Solar Energy Expansion",
      description:
        "Installed 300 solar panels reducing annual emissions by 60 tons.",
      time: "2h ago",
    },
    {
      id: 2,
      campus: "Riverdale Institute",
      title: "Zero Plastic Drive",
      description:
        "Successfully removed single-use plastics across campus.",
      time: "1d ago",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* 🌿 GREEN CAMPUS OF THE MONTH */}
        <div style={styles.badgeCard}>
          <div style={styles.badgeHeader}>🌿 Green Campus of the Month</div>
          <div style={styles.badgeTitle}>
            College of Engineering ABCD
          </div>
          <p style={styles.badgeText}>
            Recognized for outstanding sustainability initiatives,
            renewable energy adoption, and eco-friendly campus practices.
          </p>
          <button style={styles.badgeButton}>View Details →</button>
        </div>

        {/* POSTS */}
        {posts.map((post) => (
          <div key={post.id} style={styles.card}>
            <div style={styles.header}>
              <strong>{post.campus}</strong>
              <span style={styles.time}>{post.time}</span>
            </div>

            <div style={styles.title}>{post.title}</div>
            <div style={styles.desc}>{post.description}</div>

            <div style={styles.actions}>
              <span>Like</span>
              <span>Comment</span>
              <span>Share</span>
            </div>
          </div>
        ))}

        {/* ➕ ADD INITIATIVE BUTTON (BOTTOM ABOVE NAVBAR) */}
        <div style={styles.bottomSection}>
          <button style={styles.addButton}>
            + Add New Initiative
          </button>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#ecfdf5",
    minHeight: "100vh",
    paddingBottom: 100, // space for navbar
  },

  container: {
    maxWidth: 600,
    margin: "0 auto",
    padding: 20,
  },

  /* 🌿 BADGE */
  badgeCard: {
    background: "linear-gradient(135deg, #bbf7d0, #86efac)",
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    boxShadow: "0 6px 20px rgba(0,128,0,0.15)",
  },

  badgeHeader: {
    fontSize: 14,
    fontWeight: 600,
    color: "#065f46",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  badgeTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#064e3b",
    marginBottom: 12,
  },

  badgeText: {
    fontSize: 14,
    color: "#065f46",
    marginBottom: 16,
  },

  badgeButton: {
    padding: "8px 16px",
    borderRadius: 30,
    border: "none",
    background: "#065f46",
    color: "#ffffff",
    fontWeight: 600,
    cursor: "pointer",
  },

  /* POSTS */
  card: {
    background: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  time: {
    fontSize: 12,
    color: "#6b7280",
  },

  title: {
    fontWeight: 600,
    marginBottom: 6,
  },

  desc: {
    fontSize: 14,
    color: "#374151",
  },

  actions: {
    marginTop: 12,
    display: "flex",
    gap: 20,
    fontSize: 14,
    color: "#15803d",
    cursor: "pointer",
  },

  /* ➕ BOTTOM BUTTON */
  bottomSection: {
    marginTop: 30,
    marginBottom: 20,
  },

  addButton: {
    width: "100%",
    padding: "14px",
    borderRadius: 12,
    border: "none",
    background: "#065f46",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: 16,
    cursor: "pointer",
  },
};