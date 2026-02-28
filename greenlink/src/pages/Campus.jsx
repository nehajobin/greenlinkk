import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Campus() {
  const location = useLocation();
  const role = location.state?.role || "student";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [complaints, setComplaints] = useState([]);

  // ✅ Load complaints from localStorage on mount
  useEffect(() => {
    const storedComplaints = localStorage.getItem("complaints");
    if (storedComplaints) {
      setComplaints(JSON.parse(storedComplaints));
    }
  }, []);

  // ✅ Save complaints to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("complaints", JSON.stringify(complaints));
  }, [complaints]);

  // ✅ Convert image to Base64 so it persists
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) return;

    const newComplaint = {
      id: Date.now(),
      title,
      description,
      image: image || null,
      status: "pending",
      createdAt: new Date().toLocaleString(),
    };

    setComplaints((prev) => [newComplaint, ...prev]);

    // Reset form
    setTitle("");
    setDescription("");
    setImage(null);
  };

  const resolveIssue = (id) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: "resolved" } : c
      )
    );
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={{ marginBottom: 20 }}>Campus Issues</h2>

        {role === "student" && (
          <div style={styles.form}>
            <input
              placeholder="Complaint title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
            />
            <textarea
              placeholder="Describe the issue"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textarea}
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={styles.input}
            />

            {image && (
              <img
                src={image}
                alt="preview"
                style={{ ...styles.image, marginBottom: 10 }}
              />
            )}

            <button onClick={handleSubmit} style={styles.button}>
              Submit
            </button>
          </div>
        )}

        {complaints.length === 0 && (
          <p style={{ textAlign: "center" }}>No issues reported yet.</p>
        )}

        {complaints.map((c) => (
          <div
            key={c.id}
            style={{
              ...styles.card,
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
            <small style={{ color: "#666" }}>{c.createdAt}</small>

            {c.image && (
              <div style={styles.imageContainer}>
                <img
                  src={c.image}
                  alt="Complaint visual"
                  style={styles.image}
                />
              </div>
            )}

            {role === "authority" && c.status === "pending" && (
              <button
                onClick={() => resolveIssue(c.id)}
                style={styles.resolveBtn}
              >
                Mark Resolved
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#ecfdf5",
    minHeight: "100vh",
    paddingBottom: 80,
  },
  container: {
    maxWidth: 600,
    margin: "0 auto",
    padding: 20,
  },
  form: {
    background: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  input: {
    width: "100%",
    padding: 8,
    marginBottom: 8,
  },
  textarea: {
    width: "100%",
    padding: 8,
    marginBottom: 8,
  },
  button: {
    background: "#16a34a",
    color: "#fff",
    padding: 8,
    border: "none",
    cursor: "pointer",
  },
  card: {
    background: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  resolveBtn: {
    marginTop: 10,
    padding: 6,
    background: "#15803d",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  imageContainer: {
    marginTop: 10,
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "300px",
    borderRadius: 8,
    objectFit: "cover",
  },
};