import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function SeoHead({
  title,
  description,
  keywords,
  canonical,
  alternateCanonical,
  ogImage,
  ogType = 'website',
  schema = null,
  lang = 'es',
  geo = null
}) {
  const { i18n } = useTranslation();
  const currentLang = i18n?.language || lang;

  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }

    // Open Graph
    const updateMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:type', ogType);
    updateMeta('og:locale', currentLang === 'en' ? 'en_US' : 'es_MX');
    if (ogImage) updateMeta('og:image', ogImage);

    // Twitter Card
    const updateTwitter = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    updateTwitter('twitter:card', 'summary_large_image');
    updateTwitter('twitter:title', title);
    updateTwitter('twitter:description', description);
    if (ogImage) updateTwitter('twitter:image', ogImage);

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // hreflang — dominio principal (es, en, x-default)
    const updateHreflang = (hreflang, href) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hreflang;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    if (canonical) {
      updateHreflang('es', canonical);
      updateHreflang('x-default', canonical);
    }
    if (alternateCanonical) {
      updateHreflang('en', alternateCanonical);
    }

    // Geo tags
    if (geo) {
      const updateGeoMeta = (name, content) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.name = name;
          document.head.appendChild(meta);
        }
        meta.content = content;
      };
      if (geo.region) updateGeoMeta('geo.region', geo.region);
      if (geo.placename) updateGeoMeta('geo.placename', geo.placename);
      if (geo.position) {
        updateGeoMeta('geo.position', geo.position);
        updateGeoMeta('ICBM', geo.position);
      }
    }

    // JSON-LD Schema
    if (schema) {
      let scriptSchema = document.querySelector('script[data-schema="page"]');
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.type = 'application/ld+json';
        scriptSchema.setAttribute('data-schema', 'page');
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    }

    // Language attribute
    document.documentElement.lang = currentLang;

  }, [title, description, keywords, canonical, alternateCanonical, ogImage, ogType, schema, currentLang, geo]);

  return null;
}