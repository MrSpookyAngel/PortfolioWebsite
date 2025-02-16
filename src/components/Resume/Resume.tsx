import { Document, Page, pdfjs } from "react-pdf";
import { Container } from "@mui/material";

import pdf from "./Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Resume() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Document file={pdf}>
        <Page renderTextLayer={false} pageNumber={1} scale={1.5} />
      </Document>
    </Container>
  );
}

export default Resume;
