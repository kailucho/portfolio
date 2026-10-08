import React from "react";

const SystemTrace = ({ nodes, compact = false, inverse = false }) => (
  <div
    className={`system-trace${compact ? " system-trace--compact" : ""}${
      inverse ? " system-trace--inverse" : ""
    }`}
    aria-label={`System flow: ${nodes.join(" to ")}`}
  >
    {nodes.map((node, index) => (
      <React.Fragment key={node}>
        <span className="system-trace__node">
          <span className="system-trace__node-index">{String(index + 1).padStart(2, "0")}</span>
          <span>{node}</span>
        </span>
        {index < nodes.length - 1 && <span className="system-trace__connector" aria-hidden="true" />}
      </React.Fragment>
    ))}
  </div>
);

export default SystemTrace;
