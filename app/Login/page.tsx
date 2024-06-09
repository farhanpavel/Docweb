"use client";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="modal-background">
        <div className="modal">
          {/* Login form or modal content */}
        </div>
      </div>
      <style jsx>{`
        .login-page {
          position: relative;
        }
        .modal-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Reduces the opacity of the homepage */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
