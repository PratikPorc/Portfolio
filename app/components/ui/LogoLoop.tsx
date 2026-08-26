"use client";
import React, { useMemo } from "react";
import "./LogoLoop.css";

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === "number" ? `${value}px` : (value ?? undefined);

function LogoItemView({
  item,
  itemKey,
  renderItem,
}: {
  item: LogoItem;
  itemKey: React.Key;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
}) {
  if (renderItem) {
    return (
      <li className="logoloop__item" key={itemKey} role="listitem">
        {renderItem(item, itemKey)}
      </li>
    );
  }

  const isNodeItem = "node" in item;
  const content = isNodeItem ? (
    <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>
      {item.node}
    </span>
  ) : (
    <img
      src={item.src}
      srcSet={item.srcSet}
      sizes={item.sizes}
      width={item.width}
      height={item.height}
      alt={item.alt ?? ""}
      title={item.title}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );

  const itemAriaLabel = isNodeItem ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title);
  const itemContent = item.href ? (
    <a
      className="logoloop__link"
      href={item.href}
      aria-label={itemAriaLabel || "logo link"}
      target="_blank"
      rel="noreferrer noopener"
    >
      {content}
    </a>
  ) : (
    content
  );

  return (
    <li className="logoloop__item" key={itemKey} role="listitem">
      {itemContent}
    </li>
  );
}

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = "Partner logos",
    className,
    style,
  }) => {
    const durationSec = Math.max(12, (logos.length * (logoHeight + gap)) / Math.max(speed, 1));

    const rootClassName = [
      "logoloop",
      "logoloop--horizontal",
      fadeOut && "logoloop--fade",
      scaleOnHover && "logoloop--scale-hover",
      pauseOnHover && "logoloop--pause-hover",
      direction === "right" && "logoloop--reverse",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const containerStyle = useMemo(
      () =>
        ({
          width: toCssLength(width) ?? "100%",
          "--logoloop-gap": `${gap}px`,
          "--logoloop-logoHeight": `${logoHeight}px`,
          "--logoloop-duration": `${durationSec}s`,
          ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
          ...style,
        }) as React.CSSProperties,
      [width, gap, logoHeight, durationSec, fadeOutColor, style]
    );

    const looped = useMemo(() => [...logos, ...logos], [logos]);

    return (
      <div className={rootClassName} style={containerStyle} role="region" aria-label={ariaLabel}>
        <ul className="logoloop__track" role="list">
          {looped.map((item, index) => (
            <LogoItemView
              key={`${index}-${"title" in item ? item.title : index}`}
              item={item}
              itemKey={index}
              renderItem={renderItem}
            />
          ))}
        </ul>
      </div>
    );
  }
);

LogoLoop.displayName = "LogoLoop";

export default LogoLoop;
