import React, { useState } from "react";
import { Box, Typography, Card, Chip, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SecurityIcon from "@mui/icons-material/Security";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaletteIcon from "@mui/icons-material/Palette";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ShieldIcon from "@mui/icons-material/Shield";
import ApiIcon from "@mui/icons-material/Api";
import { placeholderLogo } from "../../helpers/helpers";

const portfolioProjects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    category: "Web development",
    image: "/e_commerce.png",
    Icon: ShoppingCartIcon,
    description: [
      "We designed and built a full-featured e-commerce platform that gives retailers a modern storefront and shoppers a smooth path from browsing to checkout. The system supports multiple product categories, search and filters, and a cart that works consistently across devices.",
      "Secure payment integration was a priority: the platform connects to leading payment providers so transactions are safe and compliant. Sellers get a clear dashboard for orders, inventory levels, and basic analytics without leaving the admin panel.",
      "The front-end is responsive and fast, so the same site works on phones, tablets, and desktops. We focused on clear product pages, one-click add-to-cart, and a checkout flow that keeps abandonment low.",
      "The result is a scalable online store that’s straightforward to run day to day and ready to grow with new products, promotions, and markets.",
    ],
  },
  {
    id: 2,
    name: "Corporate Website Redesign",
    category: "Website Design",
    image: "/web_design.png",
    Icon: LanguageIcon,
    description: [
      "The client needed a corporate site that felt current, trustworthy, and easy to navigate. We started by aligning the structure and messaging with their goals: who they are, what they offer, and how visitors can get in touch or take the next step.",
      "We chose a clean, professional layout with clear typography and enough white space so key messages stand out. The design system—colours, type, and components—is consistent across the site so the brand feels cohesive.",
      "Performance and accessibility were built in from the start. Pages load quickly, and the layout and interactive elements work for keyboard and screen-reader users. The site is fully responsive so it works on any screen size.",
      "The new site has become the central place for the company’s story, services, and contact details, and is simple for the team to update with new content.",
    ],
  },
  {
    id: 3,
    name: "Healthcare Mobile App",
    category: "Mobile Development",
    image: "/mobile_app.png",
    Icon: MedicalServicesIcon,
    description: [
      "This healthcare app was built to put useful tools in patients’ hands: booking appointments, viewing upcoming visits, and accessing key information in one place. We worked closely with the client to keep the experience simple and respectful of sensitive health data.",
      "The app connects to the provider’s existing systems so appointment slots and basic records stay in sync. Patients can request or change appointments, get reminders, and see short instructions to prepare for visits—reducing no-shows and last-minute confusion.",
      "Privacy and security were non-negotiable. We followed healthcare data standards, used secure authentication, and made sure only the right information is shown to the right user. The design avoids medical jargon where possible so it’s approachable for a wide range of users.",
      "Since launch, the app has become a standard way for patients to interact with the organisation, freeing staff for in-person care while keeping communication clear and organised.",
    ],
  },
  {
    id: 4,
    name: "Enterprise Security Suite",
    category: "Cyber Support",
    image: "/security.png",
    Icon: SecurityIcon,
    description: [
      "This project delivered an enterprise-grade security suite to help large organisations protect their systems and data. The suite brings together monitoring, access control, and reporting so security teams can see what’s happening and act quickly.",
      "We implemented real-time threat detection and alerting so unusual activity is flagged early. Role-based access ensures that only authorised people can reach sensitive systems, and all access is logged for audit and investigation.",
      "Compliance was a core requirement. The suite supports common frameworks and generates evidence and reports that teams need for audits. Policies can be configured to match the organisation’s risk appetite and regulatory obligations.",
      "The result is a unified security layer that reduces complexity, improves visibility, and helps the business focus on growth instead of constantly firefighting incidents.",
    ],
  },
  {
    id: 5,
    name: "SaaS Dashboard",
    category: "Web development",
    image: placeholderLogo,
    Icon: DashboardIcon,
    description: [
      "We built a central dashboard for a SaaS product so users can see key metrics, manage settings, and take action without switching between tools. The goal was to make complex data easy to understand and act on.",
      "The dashboard uses clear charts and tables for usage, revenue, and performance. Users can customise which widgets appear and how they’re arranged, so teams can focus on what matters most to them. Data refreshes in near real time so decisions are based on current numbers.",
      "Drill-down and filters let users explore specifics—by time range, customer segment, or product—without leaving the dashboard. We kept the interface consistent so once you learn one view, others feel familiar.",
      "The dashboard has become the main place where customers monitor their account and usage, reducing support questions and helping them get more value from the product.",
    ],
  },
  {
    id: 6,
    name: "Brand Identity Website",
    category: "Website Design",
    image: "/brand_identity.png",
    Icon: PaletteIcon,
    description: [
      "This project was about turning a refreshed brand identity into a website that feels cohesive and memorable. We started from the client’s new visual guidelines—colours, typography, imagery—and translated them into a structured, easy-to-navigate site.",
      "Every page uses the same design language: consistent headers, spacing, and components so the experience feels intentional rather than patchwork. We chose imagery and tone that match the brand’s personality and the audiences they care about.",
      "The site isn’t just a brochure; it’s built so the team can update content, add case studies, and keep the story current. We kept the CMS simple so non-technical staff can publish with confidence.",
      "The outcome is a website that clearly communicates who the company is, what they stand for, and why visitors should care—all aligned with their identity across other touchpoints.",
    ],
  },
  {
    id: 7,
    name: "Fitness Tracking App",
    category: "Mobile Development",
    image: "/app.png",
    Icon: FitnessCenterIcon,
    description: [
      "We developed a fitness and activity app that helps users track workouts, set goals, and stay motivated. The app supports a variety of activities—running, cycling, gym sessions, and more—and presents progress in a simple, encouraging way.",
      "Users can log sessions manually or sync with wearables and other apps where applicable. Goals are configurable (e.g. steps, active minutes, workouts per week), and the app sends timely reminders and celebrates milestones to keep engagement high.",
      "The design prioritises clarity: quick log entry, easy-to-scan history, and summaries that show trends over time. We avoided clutter so daily use feels light and focused, whether someone is a casual mover or training for an event.",
      "Since release, the app has become a daily habit for many users, with positive feedback on both usability and the balance between guidance and flexibility.",
    ],
  },
  {
    id: 8,
    name: "Network Security Audit",
    category: "Cyber Support",
    image: "/network_security.png",
    Icon: ShieldIcon,
    description: [
      "This engagement was a full network security audit for an organisation that needed a clear picture of their defences and exposure. We mapped their infrastructure, identified weak spots, and produced a prioritised plan to improve security.",
      "We combined automated scanning with manual review so we didn’t miss misconfigurations or business-context risks. The audit covered perimeter, internal network, access controls, and key applications, with findings documented in a way that technical and leadership teams could use.",
      "The deliverable was a detailed report with risk ratings, evidence, and concrete remediation steps. We also ran a workshop to walk through the results and answer questions so the client could own the follow-up work.",
      "The client used the report to fix critical issues first, then work through the roadmap. They now have a clearer security posture and a repeatable approach for future audits.",
    ],
  },
  {
    id: 9,
    name: "API Integration Platform",
    category: "Web development",
    image: "/api.png",
    Icon: ApiIcon,
    description: [
      "We designed and implemented an API platform that lets external partners and internal systems integrate with the client’s product in a secure, scalable way. The APIs cover the main operations—data access, actions, and webhooks—so integrations can be built without touching the core product code.",
      "Documentation is central to the offering: clear endpoints, request and response examples, and guides for common use cases. Developers can try calls from the docs and use API keys and scopes that limit access to what each integration needs.",
      "Security and reliability were built in from the start: authentication, rate limiting, and logging so the team can monitor usage and respond to issues. The platform is designed to handle growth in both traffic and number of integrations.",
      "The platform is now the standard way for third parties to connect to the product, enabling partnerships and internal automation while keeping control and visibility in the client’s hands.",
    ],
  },
];

const filterOptions = ["All", "Web development", "Website Design", "Mobile Development", "Cyber Support"];

function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === selectedFilter);

  // Detail view: banner + content (consistent with Services/Products/Blogs)
  if (selectedProject) {
    const project = selectedProject;
    // Portfolio images live in frontend public/ — use as-is. getImageUrl() points to the API origin and would 404.
    const imageUrl =
      project.image &&
      (project.image.startsWith("http://") || project.image.startsWith("https://"))
        ? project.image
        : project.image || placeholderLogo;
    return (
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          backgroundColor: (theme) => theme.palette.background.default,
          padding: { xs: "0", sm: "0", md: "0" },
          boxSizing: "border-box",
        }}
      >
        {/* Hero banner - consistent with ServiceDetail, ProductDetail, BlogDetail */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "300px", sm: "400px", md: "500px" },
            overflow: "hidden",
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <Box
            component="img"
            src={imageUrl}
            alt={project.name}
            onError={(e) => {
              e.target.src = placeholderLogo;
            }}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            }}
          />
        </Box>

        {/* Content */}
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: { xs: "2rem 1rem", sm: "3rem 2rem", md: "4rem 3rem" },
          }}
        >
          <Button
            startIcon={<ArrowBackIosIcon sx={{ fontSize: "1rem" }} />}
            onClick={() => setSelectedProject(null)}
            sx={{
              textTransform: "none",
              marginBottom: 2,
              color: (theme) => theme.palette.text.secondary,
              "&:hover": { backgroundColor: "transparent", color: (theme) => theme.palette.primary.main },
            }}
          >
            Back to portfolio
          </Button>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              marginBottom: 1,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {project.name}
          </Typography>
          <Chip
            label={project.category}
            size="small"
            sx={{
              fontSize: "0.75rem",
              backgroundColor: (theme) => theme.palette.primary.main,
              color: "#FFFFFF",
              height: 28,
              marginBottom: 2,
            }}
          />
          {project.description && project.description.length > 0 && (
            <Box sx={{ "& > p": { marginBottom: 2 } }}>
              {(Array.isArray(project.description) ? project.description : [project.description]).map(
                (paragraph, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    component="p"
                    sx={{
                      color: (theme) => theme.palette.text.secondary,
                      lineHeight: 1.7,
                      maxWidth: "65ch",
                    }}
                  >
                    {paragraph}
                  </Typography>
                )
              )}
            </Box>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        backgroundColor: (theme) => theme.palette.background.default,
        padding: { xs: "4rem 1rem", sm: "5rem 2rem", md: "6rem 3rem" },
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Title */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
            color: (theme) => theme.palette.text.primary,
            textAlign: "center",
            marginBottom: { xs: "1rem", sm: "1.5rem" },
          }}
        >
          Our Portfolio
        </Typography>

        {/* Recent Works Subtitle */}
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            fontWeight: 500,
            color: (theme) => theme.palette.text.secondary,
            textAlign: "center",
            marginBottom: { xs: "2rem", sm: "3rem" },
          }}
        >
          Recent Works
        </Typography>

        {/* Filter Chips */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 1.5 },
            marginBottom: { xs: "3rem", sm: "4rem" },
          }}
        >
          {filterOptions.map((filter) => (
            <Chip
              key={filter}
              label={filter}
              clickable
              onClick={() => setSelectedFilter(filter)}
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
                padding: { xs: "0.5rem 1rem", sm: "0.75rem 1.5rem" },
                height: "auto",
                backgroundColor: (theme) =>
                  selectedFilter === filter
                    ? theme.palette.primary.main
                    : theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.06)",
                color: (theme) =>
                  selectedFilter === filter ? "#FFFFFF" : theme.palette.text.primary,
                border: (theme) =>
                  selectedFilter === filter
                    ? `1px solid ${theme.palette.primary.main}`
                    : theme.palette.mode === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: (theme) =>
                    selectedFilter === filter
                      ? theme.palette.primary.main
                      : theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.15)"
                      : "rgba(0, 0, 0, 0.1)",
                  borderColor: (theme) => theme.palette.primary.main,
                },
              }}
            />
          ))}
        </Box>

        {/* Portfolio Grid - icons as thumbnails, no overlay */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, sm: 2.5, md: 3 },
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {filteredProjects.map((project) => {
            const Icon = project.Icon;
            return (
              <Card
                key={project.id}
                onClick={() => setSelectedProject(project)}
                sx={{
                  aspectRatio: "4/3",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.03)",
                  border: (theme) =>
                    theme.palette.mode === "dark"
                      ? "1px solid rgba(255, 255, 255, 0.1)"
                      : "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: 2,
                  overflow: "hidden",
                  position: "relative",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: (theme) => theme.palette.primary.main,
                    boxShadow: (theme) =>
                      theme.palette.mode === "light"
                        ? "0 4px 12px rgba(0, 0, 0, 0.1)"
                        : "0 8px 32px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
                  <Icon
                    sx={{
                      fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                      color: (theme) => theme.palette.primary.main,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    padding: { xs: "1rem", sm: "1.25rem" },
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.75,
                    borderTop: (theme) =>
                      theme.palette.mode === "dark"
                        ? "1px solid rgba(255, 255, 255, 0.1)"
                        : "1px solid rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "0.9375rem", sm: "1rem" },
                      fontWeight: 600,
                      color: (theme) => theme.palette.text.primary,
                      lineHeight: 1.2,
                    }}
                  >
                    {project.name}
                  </Typography>
                  <Chip
                    label={project.category}
                    size="small"
                    sx={{
                      fontSize: "0.75rem",
                      backgroundColor: (theme) => theme.palette.primary.main,
                      color: "#FFFFFF",
                      height: 24,
                      width: "fit-content",
                      alignSelf: "flex-start",
                    }}
                  />
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Portfolio;
