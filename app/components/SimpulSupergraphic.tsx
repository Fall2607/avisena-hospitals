import React from "react";

interface SimpulSupergraphicProps {
  className?: string;
  variant?: "color" | "outline-tosca" | "outline-blue" | "outline-white" | "filled-monochrome";
  opacity?: number;
}

/**
 * Elemen Supergraphic "Simpul Kepedulian" resmi Avisena Healthcare Group
 * Diekstrak dari geometri vektor logo utama (stilasi huruf L, DNA/Infinity, dan simpul tali).
 */
export const SimpulSupergraphic: React.FC<SimpulSupergraphicProps> = ({
  className = "w-64 h-64",
  variant = "color",
  opacity = 1,
}) => {
  const isOutline = variant.startsWith("outline");
  const strokeColor =
    variant === "outline-tosca"
      ? "#00A79C"
      : variant === "outline-blue"
      ? "#154C96"
      : "#FFFFFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="15 15 90 90"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Kelopak Kiri Atas (Tosca) */}
      <path
        d="M20.7,41.75c0,11.38,9.23,20.61,20.61,20.61-.01-14.14,0-17.8,0-31.82-.23-13.54-20.38-13.55-20.61,0,0,7.34,0,3.88,0,11.21h0Z"
        fill={
          isOutline
            ? "none"
            : variant === "filled-monochrome"
            ? "currentColor"
            : "#00A79C"
        }
        stroke={isOutline ? strokeColor : "none"}
        strokeWidth={isOutline ? "1.6" : "0"}
      />
      {/* Kelopak Kiri Bawah (Orange) */}
      <path
        d="M61.93,82.98c-11.38,0-20.61-9.23-20.61-20.61,14.14.01,7.72,0,21.75,0,13.54.23,13.55,20.38,0,20.61-7.34,0,6.2,0-1.13,0h0Z"
        fill={
          isOutline
            ? "none"
            : variant === "filled-monochrome"
            ? "currentColor"
            : "#F69320"
        }
        stroke={isOutline ? strokeColor : "none"}
        strokeWidth={isOutline ? "1.6" : "0"}
      />
      {/* Kelopak Kanan Bawah (Tosca) */}
      <path
        d="M96.29,78.35c0-11.38-9.23-20.61-20.61-20.61.01,14.14,0,17.8,0,31.82.23,13.54,20.38,13.55,20.61,0,0-7.34,0-3.88,0-11.21h0Z"
        fill={
          isOutline
            ? "none"
            : variant === "filled-monochrome"
            ? "currentColor"
            : "#00A79C"
        }
        stroke={isOutline ? strokeColor : "none"}
        strokeWidth={isOutline ? "1.6" : "0"}
      />
      {/* Kelopak Kanan Atas (Blue) */}
      <path
        d="M55.06,37.12c11.38,0,20.61,9.23,20.61,20.61-14.14-.01-7.72,0-21.75,0-13.54-.23-13.55-20.38,0-20.61,7.34,0-6.2,0,1.13,0h0Z"
        fill={
          isOutline
            ? "none"
            : variant === "filled-monochrome"
            ? "currentColor"
            : "#154C96"
        }
        stroke={isOutline ? strokeColor : "none"}
        strokeWidth={isOutline ? "1.6" : "0"}
      />
    </svg>
  );
};

