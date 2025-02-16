import { Document, Page, pdfjs } from "react-pdf";
import { Container } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

function Resume() {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
    >
      <Document file="Resume.pdf" loading="Loading resume...">
        <Page
          pageNumber={1}
          width={window.innerWidth * 0.4}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </Container>
  );
}

export default Resume;
