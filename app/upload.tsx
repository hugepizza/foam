import React, { useRef } from "react";
export default function Upload({
  children,
  afterUploaded,
  setUploading,
}: {
  children: React.ReactNode;
  afterUploaded: ({ url }: { url: string }) => void;
  setUploading: (loading: boolean) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files || event.target.files.length < 1) {
      return;
    }
    const f = event.target.files[0];
    const formData = new FormData();
    formData.append("file", f);
    setUploading(true);
    const resp = await fetch("/api/upload", {
      method: "post",
      body: formData,
      headers: {},
    });
    const res = await resp.json();

    afterUploaded(res as { url: string });
    setUploading(false);
  };

  return (
    <div onClick={handleClick}>
      {children}
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
}
