# Apparex
Apparex is an ecommerce application for a clothing store.

Currently, two official plugins are available:

## Core Technologies and Stack

- Frontend Framework: Use Next.js (latest stable version) for server-side rendering, static site generation, and API routes.
- UI Library: React (integrated with Next.js) for building reusable components.
- Language: TypeScript throughout the entire codebase for type safety and to prevent runtime errors.
- Styling: Tailwind CSS for utility-first styling. Ensure the design is clean, with Nike-like aesthetics: bold typography, high-quality images, smooth animations (using CSS transitions or Framer Motion if needed), and a color scheme inspired by Nike (e.g., black, white, red accents).
- Database: Supabase.
- Payment Gateway: Integrate Stripe for secure payments, including checkout sessions, handling success/cancel URLs, and webhooks for order fulfillment.
- Other Dependencies:

  - Authentication: Use NextAuth.js for user authentication (support Google OAuth and email/password).
State Management: Use Redux Toolkit or Zustand for managing cart and user state.
  - Form Handling: React Hook Form with Zod for validation.
  - Image Optimization: Next.js built-in Image component.
  - Environment Variables: Use .env for secrets like Stripe keys, MongoDB URI, etc.
  - Testing: Include unit tests with Jest and React Testing Library for key components and pages.
  - Deployment: Provide instructions for deploying to Vercel (optimized for Next.js).

## Key Features and Requirements
The web application must include the following pages and functionalities, all fully implemented and integrated:

- [x] Home Page:
  1. Hero section with featured products or promotions (carousel/slider using Swiper.js or similar).
  2. Product categories grid (e.g., Men, Women, Kids, Shoes, Clothing, Accessories).
  3. Featured products section with images, prices, and "Add to Cart" buttons.
  4. Footer with links to About, Contact, Privacy Policy, and social media.

- [ ] Product Listing Pages:
  1. Category pages (e.g., /shoes, /clothing) with filters (size, color, price range) and sorting (price low-high, popularity).
  2. Search functionality across all products.
  3. Infinite scrolling or pagination for product lists.
  4. Each product card shows image, name, price, ratings, and quick view modal.

- [ ] Product Detail Page:
  1. Dynamic route (e.g., /products/[id]).
  2. High-res images with zoom/thumbnail gallery.
  3. Product details: description, sizes, colors (variants), reviews/ratings.
    "Add to Cart" button with size/color selection (handle stock checks).
    Related products section.

- [ ] User Authentication:
  1. Sign-up, login, logout, password reset.
  2. Protected routes for user profile, orders, wishlist.
  3. User profile page to view/edit details, order history.

- [ ] Shopping Cart:
  1. Persistent cart (stored in localStorage or database for logged-in users).
  2. View cart page with item list, quantity controls, subtotal, remove items.
  3. Handle updates in real-time (e.g., quantity changes reflect price).

- [ ] Checkout and Payment:
  1. Multi-step checkout: Shipping address, payment method.
  2. Integrate Stripe Checkout: Create sessions, redirect to Stripe page, handle success/failure.
  3. Webhook endpoint in Next.js API to update order status post-payment.
    Support for guest checkout.
  4. Order confirmation page/email simulation (log to console or use Nodemailer for real emails).

- [ ] Admin Dashboard (Protected):
  1. Separate section (e.g., /admin) for admins to manage products: CRUD operations (create, read, update, delete products).
  2. View orders, update statuses.
  3. Use role-based access (admin vs. user) via NextAuth.

- [ ] Additional Features:

  1. Wishlist: Add/remove products, view page.
  2. Reviews: Users can add ratings/reviews to products.
  3. SEO: Use Next.js metadata for dynamic titles, descriptions.
  4. Error Handling: Custom 404 page, global error boundaries, toast notifications (using React-Toastify) for success/errors.
  5. Performance: Lazy loading, code splitting, image optimization.
  6. Security: Sanitize inputs, use HTTPS, protect API routes with authentication.
  7. Responsiveness: Use Tailwind's responsive utilities (e.g., md:, lg:) to ensure mobile-first design.

## Database Schema (Using Mongoose)
Define schemas for:

 - User: id, name, email, password (hashed), role (user/admin), address.
- Product: id, name, description, price, images (array of URLs), category, sizes (array), colors (array), stock, ratings (average and count).
- Order: id, userId, products (array of {productId, quantity, price}), totalAmount, status (pending, paid, shipped), paymentInfo.
- Review: id, productId, userId, rating, comment.
Seed the database with sample data (at least 20 products mimicking Nike items) in a setup script.

## Project Structure
Organize the codebase in a standard Next.js structure:

- /app: For app router pages and layouts.
- /components: Reusable UI components (e.g., ProductCard, Navbar, Footer).
- /lib: Utilities, database connections (mongoose.ts), Stripe helpers.
- /models: Mongoose schemas.
- /api: API routes (e.g., /api/products, /api/cart, /api/stripe/webhook).
- /public: Static assets like images.
- /tests: Jest tests.
- Root files: next.config.js, tailwind.config.js, tsconfig.json, .env.example.