import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        const calculatedWidth = Math.min(
          containerRef.current.offsetWidth,
          isMobile ? window.innerWidth : 1000
        );
        setContainerWidth(calculatedWidth * 0.95);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [isMobile]);

  return (
    <Stack
      spacing="1.5rem"
      padding="2rem"
      minHeight="100vh"
      marginBottom="6rem"
      sx={{ alignItems: "center" }}
    >
      <Typography variant="h3" fontWeight="bold" color="primary">
        Resume
      </Typography>
      <Container
        ref={containerRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          width: "100%",
          overflow: "clip",
        }}
      >
        <Document file="Resume.pdf" loading="Loading resume...">
          <Page
            pageNumber={1}
            width={containerWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={isMobile ? 1 : 1.2}
          />
        </Document>
      </Container>
    </Stack>
  );
}
