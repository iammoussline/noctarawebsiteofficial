# noctara. — Site vitrine photographe

Site vitrine professionnel bilingue (FR/EN) pour **Noctara.**, photographe basé à Clermont-Ferrand.

**Live :** [www.thenoctara.com](https://www.thenoctara.com)

---

## Structure

```
noctarawebsite/
├── index.html           # Page principale (français)
├── en.html              # Page principale (anglais)
├── cgv.html             # Conditions Générales de Vente (FR)
├── cgv-en.html          # Terms & Conditions (EN)
├── confidentialite.html # Politique de confidentialité (FR)
├── privacy.html         # Privacy Policy (EN)
├── mentions-legales.html# Mentions légales (FR)
├── legal-notice.html    # Legal Notice (EN)
├── favicon.svg          # Favicon (SVG)
├── sitemap.xml          # Sitemap SEO (FR + EN)
├── robots.txt           # Directives crawlers
└── CNAME                # Domaine personnalisé GitHub Pages
```

---

## Stack

- HTML / CSS / JS vanilla — aucune dépendance externe
- Google Fonts : **Borel** (logo), **Outfit**, **Inter**, **Unbounded**
- Formulaires : [Formspree](https://formspree.io) (`f/mojkbzrv`)
- Hébergement : GitHub Pages

---

## Design

| Élément | Valeur |
|---|---|
| Couleur principale | `#1858AE` |
| Logo texte | `noctara.` — police Borel, point `#FFBD59` |
| Thèmes | Dark (défaut) + Light (toggle) |
| Responsive | Mobile-first, breakpoints 600px / 900px |

---

## Pages

### `index.html` / `en.html`
Sections : Hero · Stats · Portfolio · À propos · Tarifs · Process · Témoignages · Contact

- Lightbox portfolio (clavier ← →, Échap)
- Drawer formulaire devis pro
- Toggle dark/light avec persistance localStorage
- Compteur animé (IntersectionObserver)
- Particules canvas (desktop uniquement)
- Effets 3D tilt sur cartes (desktop)

### Pages légales
CGV · Confidentialité · Mentions légales — navigation directe vers `index.html`

---

## SEO

- Balises meta description, keywords, Open Graph, Twitter Card
- JSON-LD `LocalBusiness` (schema.org)
- `sitemap.xml` avec balises `hreflang` FR/EN
- `robots.txt` — pages légales exclues de l'indexation
- URLs canoniques définies

---

## Contact

**Mouhammed Mustafa Kandemir**
[contact@thenoctara.com](mailto:contact@thenoctara.com)
[@thenoctara_](https://www.instagram.com/thenoctara_)
# noctatest
