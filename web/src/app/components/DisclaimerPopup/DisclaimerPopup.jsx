'use client'
import { useEffect, useRef, useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const STORAGE_KEY = "dhumavati_disclaimer_accepted";

export default function DisclaimerPopup() {
  const [visible, setVisible] = useState(false);
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const [checked, setChecked] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (accepted !== "true") {
      setVisible(true);
    }
  }, []);

  const handleScroll = () => {
    const el = contentRef.current;
    if (!el) return;
    const reachedBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight < 20;
    if (reachedBottom) setHasScrolledToEnd(true);
  };

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  return (
    <Modal
      show={visible}
      backdrop="static"
      keyboard={false}
      centered
      size="lg"
      dialogClassName="disclaimer-dialog"
      contentClassName="disclaimer-modal-content"
      onHide={() => {}}
    >
      <Modal.Header className="disclaimer-modal-header">
        <div>
          <div className="fw-bold fs-4 text-dark">Disclaimers</div>
          <div className="fs-6 text-muted">
            Dhumavati Consulting LLP - DISCLAIMERS
          </div>
        </div>
      </Modal.Header>

      <Modal.Body className="disclaimer-modal-body">
        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="disclaimer-scroll-box"
        >
          <p>
            This Privacy Policy outlines how Dhumavati Consulting LLP
            (referred to as "we," "our," or "us") collects, uses, discloses,
            and protects your personal information when you use our
            website. By accessing and using the Dhumavati Consulting LLP
            website, you consent to the practices described in this Privacy
            Policy.
          </p>
          <p><b>1. NO PROFESSIONAL ADVICE</b></p>
          <p>
            The content on our website is not intended to constitute
            professional advice. It is important to seek the advice of
            qualified professionals for specific information or assistance
            related to property dealings or any other matters.
          </p>
          <p><b>2. PROPERTY LISTINGS</b></p>
          <p>
            We strive to provide accurate and up-to-date information on
            property listings. However, we do not warrant or represent that
            the information on our website is error-free, and we are not
            responsible for any inaccuracies, omissions, or
            misrepresentations.
          </p>
          <p><b>3. USE AT YOUR OWN RISK</b></p>
          <p>
            Your use of the Dhumavati Consulting LLP website is at your own
            risk. We are not liable for any direct, indirect, incidental,
            consequential, or punitive damages arising out of your access
            to, or use of, the website.
          </p>
          <p><b>4. THIRD-PARTY LINKS</b></p>
          <p>
            Our website may contain links to third-party websites. These
            links are provided for your convenience, and we do not endorse
            or assume responsibility for the content or practices of linked
            websites. We encourage you to review the privacy policies and
            terms of use of any third-party sites.
          </p>
          <p><b>5. CHANGES TO DISCLAIMER</b></p>
          <p>
            We reserve the right to update or modify this disclaimer at any
            time without prior notice. It is your responsibility to check
            for updates. Continued use of our website after any changes
            constitutes your acceptance of the revised disclaimer.
          </p>
        </div>

        {!hasScrolledToEnd && (
          <Alert variant="warning" className="mt-3 py-2 mb-0">
            Please scroll to the end of the disclaimer to enable the
            checkbox below.
          </Alert>
        )}

        <Form.Check
          type="checkbox"
          id="disclaimer-agree"
          className="mt-3 disclaimer-checkbox-label"
          label="I have read and agree to the Disclaimers and Terms & Conditions"
          checked={checked}
          disabled={!hasScrolledToEnd}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </Modal.Body>

      <Modal.Footer className="disclaimer-modal-footer">
        <Button
          variant="dark"
          className="w-100"
          disabled={!checked}
          onClick={handleAccept}
        >
          Accept & Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}