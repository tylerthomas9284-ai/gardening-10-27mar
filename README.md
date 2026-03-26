# Bloom Craft Gardens - HTML/CSS/JS Website

This is the complete static HTML/CSS/JavaScript version of the Bloom Craft Gardens website.

## Files Created

### Core Files
- **styles.css** - Complete stylesheet with all custom styles and responsive design
- **script.js** - JavaScript utilities for modals, forms, cookie consent, mobile menu, accordions, etc.
- **index.html** - Home page (CREATED)
- **about.html** - About page (CREATED)

### Pages to Create (Following Same Pattern)
You need to create the following HTML files using the same header/footer structure:

1. **services.html** - Services listing page
2. **pricing.html** - Pricing tiers and packages
3. **contact.html** - Contact form and information
4. **faq.html** - Frequently asked questions with accordion
5. **privacy-policy.html** - Privacy policy legal page
6. **terms-conditions.html** - Terms and conditions legal page
7. **disclaimer.html** - Disclaimer legal page
8. **cookie-policy.html** - Cookie policy legal page

## How to Create Remaining Pages

Each HTML page should follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page description here">
  <title>Page Title | Bloom Craft Gardens</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- HEADER (Copy from index.html) -->
  
  <!-- MAIN CONTENT (Page-specific content) -->
  <main class="py-16">
    <div class="container">
      <!-- Your page content here -->
    </div>
  </main>
  
  <!-- FOOTER (Copy from index.html) -->
  <!-- COOKIE BANNER (Copy from index.html) -->
  <!-- LEAD FORM MODAL (Copy from index.html) -->
  
  <script src="script.js"></script>
</body>
</html>
```

## Key Features Implemented

### Header
- Responsive navigation with mobile menu
- Active page highlighting
- "Get Free Quote" CTA button
- Sticky header on scroll

### Cookie Consent
- Appears on first visit
- Stores consent in localStorage
- "Accept" and "Manage Preferences" buttons

### Lead Form Modal
- Opens with "Get Free Quote" buttons
- Form validation
- Success/error toast notifications
- Closes on overlay click

### Forms
- Contact forms with validation
- Policy consent checkboxes
- Toast notifications for feedback

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px
- Grid layouts adapt to screen size
- Mobile menu for small screens

## JavaScript Functions Available

### Global Functions
- `Toast.show(message, type)` - Show toast notification
- `Toast.success(message)` - Show success toast
- `Toast.error(message)` - Show error toast

### Cookie Consent
- `CookieConsent.init()` - Initialize cookie banner
- `CookieConsent.accept()` - Accept cookies
- `CookieConsent.manage()` - Go to cookie policy

### Lead Form Modal
- `LeadFormModal.open()` - Open modal
- `LeadFormModal.close()` - Close modal
- `LeadFormModal.handleSubmit(event)` - Handle form submission

### Mobile Menu
- `MobileMenu.toggle()` - Toggle mobile menu
- `MobileMenu.close()` - Close mobile menu

### Accordion
- `Accordion.toggle(element)` - Toggle accordion item

### Other
- `handleContactForm(event)` - Handle contact form submission
- `setActiveNav()` - Set active navigation link
- `scrollToTop()` - Smooth scroll to top

## CSS Classes Reference

### Layout
- `.container` - Max-width container (80rem)
- `.container-sm` - Smaller container (64rem)
- `.grid` - Grid container
- `.grid-cols-2`, `.grid-cols-3`, `.grid-cols-4` - Grid columns

### Components
- `.card` - Card container
- `.card-header`, `.card-content`, `.card-footer` - Card sections
- `.btn` - Button base
- `.btn-primary`, `.btn-outline` - Button variants
- `.btn-lg`, `.btn-full` - Button sizes

### Forms
- `.form-group` - Form field wrapper
- `.form-label` - Form label
- `.form-input`, `.form-select`, `.form-textarea` - Form controls
- `.checkbox-wrapper` - Checkbox with label wrapper

### Utilities
- `.text-center` - Center text
- `.mb-4`, `.mb-6`, `.mb-8`, `.mb-12`, `.mb-16` - Margin bottom
- `.mt-4`, `.mt-6`, `.mt-8`, `.mt-12` - Margin top
- `.py-8`, `.py-12`, `.py-16` - Padding vertical
- `.bg-green-50`, `.bg-green-600`, `.bg-white` - Background colors
- `.text-green-600`, `.text-gray-700` - Text colors

## Content Guidelines

### For Services Page
- List all 9 services with images
- Include benefits, pricing, and "Get Quote" buttons
- Add process section
- Include service area information

### For Pricing Page
- 3 pricing tiers in cards
- Feature comparison
- Add-on services section
- FAQ accordion for pricing questions
- Guarantees section

### For Contact Page
- Contact form with all fields
- Contact information cards
- Business hours
- Service coverage area
- Multiple contact methods

### For FAQ Page
- Categorized FAQs in accordions
- Quick contact options
- Links to related pages

### For Legal Pages
- Structured content with sections
- Last updated date
- Contact information for questions
- Links to related policies

## Hosting

To host this website:

1. Upload all HTML, CSS, and JS files to your web server
2. Ensure all files are in the same directory (or adjust paths)
3. Set `index.html` as the default document
4. No server-side processing required - pure static site

## Customization

### Colors
Primary green: `#16a34a`
Dark green: `#15803d`
Light green: `#f0fdf4`
Gray shades: `#111827`, `#374151`, `#6b7280`, `#f9fafb`

### Fonts
System font stack is used for optimal performance and native feel.

### Images
All images are loaded from Unsplash CDN. For production:
- Download and host images locally
- Optimize images for web
- Add proper alt text for accessibility

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- No external dependencies
- Minimal CSS and JS
- Optimized for fast loading
- Mobile-friendly and responsive

## Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Proper heading hierarchy
- Alt text for images

## Notes
- Forms currently log to console (replace with actual backend)
- Toast notifications auto-dismiss after 3 seconds
- Cookie consent persists in localStorage
- Mobile menu closes on link click
- All external links open in same window (modify as needed)
