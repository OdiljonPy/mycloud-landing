import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/**
 * next-intl 3.x still injects `experimental.turbo` for Turbopack aliases.
 * Next.js 16 only accepts top-level `turbopack`, so move and drop the legacy key.
 */
function withLegacyExperimentalTurboMovedToTurbopack(config) {
  const turbo = config.experimental?.turbo;
  if (!turbo) {
    return config;
  }

  const { experimental: exp = {}, turbopack: existing = {}, ...rest } = config;
  const { turbo: _drop, ...experimentalRest } = exp;

  const merged = {
    ...rest,
    turbopack: {
      ...existing,
      ...turbo,
      resolveAlias: {
        ...existing.resolveAlias,
        ...turbo.resolveAlias,
      },
    },
  };

  if (Object.keys(experimentalRest).length > 0) {
    merged.experimental = experimentalRest;
  }

  return merged;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default withLegacyExperimentalTurboMovedToTurbopack(withNextIntl(nextConfig));
