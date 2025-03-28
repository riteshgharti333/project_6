import { useState } from "react";
import axios from "axios";
import "./Certificate.scss";
import { toast } from "sonner";
import { baseUrl } from "../../main";

const Certificate = () => {
  const [enrollmentId, setEnrollmentId] = useState("");
  const [certificateUrl, setCertificateUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const getCertificate = async (e) => {
    e.preventDefault();

    if (!enrollmentId.trim()) {
      toast.error("Please enter a valid Enrollment ID");
      return;
    }

    setLoading(true);
    setCertificateUrl("");

    try {
      const { data } = await axios.get(
        `${baseUrl}/certificate/${enrollmentId}`,
        { responseType: "blob" } // ✅ Fetch certificate as blob
      );

      const imageUrl = URL.createObjectURL(data);
      setCertificateUrl(imageUrl);

      toast.success("Certificate loaded successfully!");
    } catch (error) {
      console.error("Failed to get certificate:", error);
      toast.error("Failed to load certificate. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Hide the certificate preview
  const closePreview = () => {
    setCertificateUrl("");
  };

  return (
    <div className="certificate">
      <h3>Get Certificate</h3>

      <div className="certificate-content">
        <form onSubmit={getCertificate}>
          <input
            type="text"
            placeholder="Enter Enrollment ID"
            value={enrollmentId}
            onChange={(e) => setEnrollmentId(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Get Certificate"}
          </button>
        </form>

        {/* ✅ Display the certificate preview with close button */}
        {certificateUrl && (
          <div className="certificate-preview">
            <img src={certificateUrl} alt="Certificate" />
            <span className="close-btn" onClick={closePreview}>×</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
