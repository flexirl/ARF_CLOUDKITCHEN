import { useState } from 'react'
import './App.css'

/* ── Image assets from Figma ── */
const CROISSANT_IMG_1 = 'https://api.builder.io/api/v1/image/assets/TEMP/bd304e1c28372c20bbe841fbb71b12e60862dd15?width=400'
const CROISSANT_IMG_2 = 'https://api.builder.io/api/v1/image/assets/TEMP/ba76d86edc0cf3a9d6d22964b691cf61bc09d101?width=400'
const BANNER_IMG = 'https://api.builder.io/api/v1/image/assets/TEMP/d228b194c64b3c94d16bdea41f1beac3a7adffc1?width=1040'

const recommendedItems = [
  { id: 1, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_1 },
  { id: 2, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_1 },
  { id: 3, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_2 },
]

const previouslyOrderedItems = [
  { id: 4, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_1 },
  { id: 5, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_1 },
  { id: 6, name: 'Butter Cream Croissant', price: '₹150', rating: '4.7', image: CROISSANT_IMG_2 },
]

/* ── SVG Icon Components ── */
function HamburgerIcon() {
  return (
    <svg width="22" height="15" viewBox="0 0 27 18" fill="none">
      <path d="M0 0H27M0 9H27M0 18H27" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DeliveryScooterIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path d="M26.9167 9.91659C26.9167 8.35825 25.6417 7.08325 24.0834 7.08325H21.25C20.4709 7.08325 19.8334 7.72075 19.8334 8.49992C19.8334 9.27909 20.4709 9.91659 21.25 9.91659H24.0834V13.6708L19.1534 19.8333H14.1667V14.1666C14.1667 13.3874 13.5292 12.7499 12.75 12.7499H8.50004C5.36921 12.7499 2.83337 15.2858 2.83337 18.4166V21.2499C2.83337 22.0291 3.47087 22.6666 4.25004 22.6666H5.66671C5.66671 25.0183 7.56504 26.9166 9.91671 26.9166C12.2684 26.9166 14.1667 25.0183 14.1667 22.6666H19.1534C20.0175 22.6666 20.825 22.2699 21.3634 21.6041L26.2934 15.4416C26.7042 14.9316 26.9167 14.3083 26.9167 13.6708V9.91659ZM9.91671 24.0833C9.13754 24.0833 8.50004 23.4458 8.50004 22.6666H11.3334C11.3334 23.4458 10.6959 24.0833 9.91671 24.0833Z" fill="#005ECA" />
      <path d="M8.50004 8.5H12.75C13.5292 8.5 14.1667 9.1375 14.1667 9.91667C14.1667 10.6958 13.5292 11.3333 12.75 11.3333H8.50004C7.72087 11.3333 7.08337 10.6958 7.08337 9.91667C7.08337 9.1375 7.72087 8.5 8.50004 8.5ZM26.9167 18.4167C24.565 18.4167 22.6667 20.315 22.6667 22.6667C22.6667 25.0183 24.565 26.9167 26.9167 26.9167C29.2684 26.9167 31.1667 25.0183 31.1667 22.6667C31.1667 20.315 29.2684 18.4167 26.9167 18.4167ZM26.9167 24.0833C26.1375 24.0833 25.5 23.4458 25.5 22.6667C25.5 21.8875 26.1375 21.25 26.9167 21.25C27.6959 21.25 28.3334 21.8875 28.3334 22.6667C28.3334 23.4458 27.6959 24.0833 26.9167 24.0833Z" fill="#005ECA" />
    </svg>
  )
}

function CartBagIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 65 65" fill="none">
      <path d="M19 21.0714C19 20.7873 19.1129 20.5147 19.3138 20.3138C19.5148 20.1129 19.7873 20 20.0715 20H20.8687C22.2259 20 23.0403 20.9129 23.5046 21.7614C23.8146 22.3271 24.0389 22.9829 24.2147 23.5771L24.3575 23.5714H42.213C43.3988 23.5714 44.2561 24.7057 43.9303 25.8471L41.3187 35.0029C41.0845 35.8241 40.5892 36.5466 39.9076 37.0612C39.226 37.5757 38.3953 37.8541 37.5413 37.8543H29.0436C28.1828 37.8543 27.3458 37.5717 26.6613 37.0498C25.9768 36.5279 25.4826 35.7957 25.2547 34.9657L24.1689 31.0057L22.3688 24.9371L22.3674 24.9257C22.1445 24.1157 21.9359 23.3571 21.6245 22.7914C21.3259 22.2414 21.0859 22.1429 20.8701 22.1429H20.0715C19.7873 22.1429 19.5148 22.03 19.3138 21.829C19.1129 21.6281 19 21.3556 19 21.0714ZM28.2864 45C29.0442 45 29.771 44.699 30.3068 44.1632C30.8427 43.6273 31.1437 42.9006 31.1437 42.1429C31.1437 41.3851 30.8427 40.6584 30.3068 40.1226C29.771 39.5867 29.0442 39.2857 28.2864 39.2857C27.5285 39.2857 26.8018 39.5867 26.2659 40.1226C25.7301 40.6584 25.429 41.3851 25.429 42.1429C25.429 42.9006 25.7301 43.6273 26.2659 44.1632C26.8018 44.699 27.5285 45 28.2864 45ZM38.2871 45C39.0449 45 39.7717 44.699 40.3075 44.1632C40.8434 43.6273 41.1444 42.9006 41.1444 42.1429C41.1444 41.3851 40.8434 40.6584 40.3075 40.1226C39.7717 39.5867 39.0449 39.2857 38.2871 39.2857C37.5292 39.2857 36.8025 39.5867 36.2666 40.1226C35.7308 40.6584 35.4297 41.3851 35.4297 42.1429C35.4297 42.9006 35.7308 43.6273 36.2666 44.1632C36.8025 44.699 37.5292 45 38.2871 45Z" fill="white" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
      <path d="M1.81578 9.01955L2.58719 5.68469L0 3.44167L3.41793 3.14497L4.74713 0L6.07633 3.14497L9.49426 3.44167L6.90707 5.68469L7.67848 9.01955L4.74713 7.25124L1.81578 9.01955Z" fill="white" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M16.5559 12.906L16.1009 13.359C16.1009 13.359 15.0179 14.435 12.0629 11.497C9.10788 8.55898 10.1909 7.48298 10.1909 7.48298L10.4769 7.19698C11.1839 6.49498 11.2509 5.36698 10.6339 4.54298L9.37388 2.85998C8.60988 1.83998 7.13488 1.70498 6.25988 2.57498L4.68988 4.13498C4.25688 4.56698 3.96688 5.12498 4.00188 5.74498C4.09188 7.33198 4.80988 10.745 8.81388 14.727C13.0609 18.949 17.0459 19.117 18.6749 18.965C19.1909 18.917 19.6389 18.655 19.9999 18.295L21.4199 16.883C22.3799 15.93 22.1099 14.295 20.8819 13.628L18.9719 12.589C18.1659 12.152 17.1859 12.28 16.5559 12.906Z" fill="#005ECA" />
    </svg>
  )
}

/* ── Reusable Sub-components ── */
function VegBadge() {
  return (
    <div className="veg-indicator">
      <div className="veg-dot" />
    </div>
  )
}

function RatingChip({ rating }) {
  return (
    <div className="rating-chip">
      <span className="rating-chip-text">{rating}</span>
      <StarIcon />
    </div>
  )
}

function FoodCard({ item }) {
  return (
    <div className="food-card">
      <div className="food-card-img-wrap">
        <img src={item.image} alt={item.name} className="food-card-thumb" />
        <VegBadge />
        <button className="food-card-add-btn">Add +</button>
      </div>
      <div className="food-card-meta">
        <div className="food-card-name-row">
          <span className="food-card-name">{item.name}</span>
          <RatingChip rating={item.rating} />
        </div>
        <span className="food-card-price">{item.price}</span>
      </div>
    </div>
  )
}

function FoodScrollSection({ title, items }) {
  return (
    <section className="food-section">
      <h2 className="section-heading">{title}</h2>
      <div className="food-scroll-track">
        {items.map(item => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

/* ── Sidebar ── */
function Sidebar({ onClose }) {
  return (
    <div className="sidebar-overlay" onClick={onClose}>
      <aside className="sidebar-panel" onClick={e => e.stopPropagation()}>
        <div className="sidebar-top">
          <button className="hamburger-btn" onClick={onClose} aria-label="Close menu">
            <HamburgerIcon />
          </button>
        </div>
        <nav className="sidebar-nav-links">
          <button className="sidebar-nav-btn">Home</button>
          <button className="sidebar-nav-btn">Browse Menu</button>
          <button className="sidebar-nav-btn">Profile</button>
        </nav>
        <div className="sidebar-contact-row">
          <PhoneIcon />
          <span className="sidebar-phone-text">9XXXX XXXXX</span>
        </div>
      </aside>
    </div>
  )
}

/* ── Cart FAB ── */
function CartFab({ count = 3 }) {
  return (
    <div className="cart-fab-wrap">
      <div className="cart-fab-inner">
        <button className="cart-fab-btn" aria-label="View cart">
          <CartBagIcon />
          {count > 0 && (
            <span className="cart-fab-badge">{count}</span>
          )}
        </button>
      </div>
    </div>
  )
}

/* ── Home Page ── */
function HomePage({ onMenuOpen }) {
  return (
    <div className="page-container">
      {/* Header */}
      <header className="page-header">
        <button className="hamburger-btn" onClick={onMenuOpen} aria-label="Open menu">
          <HamburgerIcon />
        </button>
        <h1 className="header-brand">ARF Cafe</h1>
        <div className="header-right-slot" />
      </header>

      {/* Scrollable content */}
      <div className="page-scrollable">

        {/* Delivering to bar */}
        <div className="home-deliver-bar">
          <DeliveryScooterIcon />
          <div className="home-deliver-text">
            <span className="home-deliver-label">Delivering to</span>
            <span className="home-deliver-address">KP - 01, KIIT University</span>
          </div>
        </div>

        {/* Special offer banner */}
        <div className="home-banner-wrap">
          <img
            src={BANNER_IMG}
            alt="Special Offer - Get best food anywhere, anytime"
            className="home-banner-img"
          />
        </div>

        {/* Recommended section */}
        <FoodScrollSection title="Recommended" items={recommendedItems} />

        {/* Previously Ordered section */}
        <FoodScrollSection title="Previously Ordered" items={previouslyOrderedItems} />

        {/* Browse Menu CTA */}
        <div className="home-browse-btn-wrap">
          <button className="browse-menu-btn">Browse Menu</button>
        </div>

      </div>
    </div>
  )
}

/* ── App Root ── */
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-wrapper">
      {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
      <HomePage onMenuOpen={() => setSidebarOpen(true)} />
      <CartFab count={3} />
    </div>
  )
}

export default App
