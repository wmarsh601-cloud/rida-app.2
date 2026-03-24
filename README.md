# 🚗 RIDA Platform - Ride-Hailing & Marketplace

A production-ready Uber/Didi style ride-hailing platform with marketplace integration.

## 📦 Features

- **Core System**: Authentication, permissions, localization, feature flags
- **Map System**: Google Maps integration, GPS tracking, route optimization
- **Ride System**: Driver matching, fare calculation, surge pricing, real-time tracking
- **Marketplace**: Merchant portal, product management, order processing
- **Multi-region**: Support for Costa Rica, USA, Brazil, Mexico

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Database**: Prisma ORM (SQLite/PostgreSQL)
- **Maps**: Google Maps API
- **Authentication**: NextAuth.js

## 🚀 Deployment to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/rida-platform)

### Option 2: Manual Deploy

1. **Clone and push to GitHub**
   ```bash
   git clone https://github.com/your-repo/rida-platform
   cd rida-platform
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure environment variables (see below)

3. **Configure Database**
   - Use Vercel Postgres, Neon, or Supabase
   - Set `DATABASE_URL` environment variable

4. **Deploy**
   - Vercel will automatically build and deploy

## 📋 Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Database connection string | ✅ |
| `GOOGLE_MAPS_API_KEY` | Google Maps API key | ✅ |
| `NEXTAUTH_SECRET` | Authentication secret | ✅ |
| `NEXTAUTH_URL` | Your app URL | ✅ |

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Setup database
npm run db:push

# Start development server
npm run dev
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── client/            # Rider interface
│   ├── driver/            # Driver interface
│   ├── admin/             # Admin dashboard
│   └── marketplace/       # Merchant portal
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── map/              # Map components
├── services/             # Business logic
│   ├── ride/             # Ride services
│   └── map/              # Map services
├── lib/                  # Utilities
├── types/                # TypeScript types
└── constants/            # App constants
```

## 🗺️ API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

### Rides
- `POST /api/rides` - Create ride
- `GET /api/rides/:id` - Get ride details
- `POST /api/rides/:id/accept` - Accept ride (driver)
- `POST /api/rides/:id/cancel` - Cancel ride
- `POST /api/rides/:id/start` - Start trip
- `POST /api/rides/:id/complete` - Complete trip
- `GET /api/rides/:id/track` - Track ride
- `POST /api/rides/estimate` - Get fare estimate

### Drivers
- `GET /api/drivers/nearby` - Find nearby drivers

### Maps
- `GET /api/map/places` - Search places
- `GET /api/map/places/:id` - Get place details
- `GET /api/map/demand` - Get demand heatmap

### System
- `GET /api/health` - Health check
- `GET /api/config` - Public configuration

## 🌍 Supported Countries

| Country | Currency | Language | Flag |
|---------|----------|----------|------|
| Costa Rica | CRC (₡) | Spanish | 🇨🇷 |
| United States | USD ($) | English | 🇺🇸 |
| Brazil | BRL (R$) | Portuguese | 🇧🇷 |
| Mexico | MXN ($) | Spanish | 🇲🇽 |

## 📊 Database Models

- **Users & Auth**: User, Session, Device, Permission
- **Rides**: Ride, Driver
- **Marketplace**: Merchant, Product
- **Finance**: Wallet, Transaction
- **System**: SystemConfig, FeatureFlag, SystemLog

## 🔒 Security Features

- Password hashing with bcrypt
- Session-based authentication
- Rate limiting
- CORS protection
- Input validation with Zod
- SQL injection prevention (Prisma)

## 📱 Modules Status

| Module | Status | Description |
|--------|--------|-------------|
| Core System | ✅ Complete | Auth, permissions, localization |
| Map System | ✅ Complete | Google Maps, GPS, routing |
| Ride System | ✅ Complete | Matching, fares, tracking |
| Client App | 🔄 Pending | Rider interface |
| Driver App | 📋 Planned | Driver interface |
| Admin Dashboard | 📋 Planned | Admin panel |
| Marketplace | 📋 Planned | Merchant portal |

## 📄 License

MIT License - See LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
