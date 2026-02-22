import React, { useState } from "react";
import { Ripple } from "primereact/ripple";
import { NavLink } from "react-router-dom";
import { Badge } from "primereact/badge";
import logo from "/logo.png"

const Sidebar = ({ collapsed }) => {
    const [systemOpen, setSystemOpen] = useState(false);

    return (
        <aside
            className={`
        flex flex-column
        ${collapsed ? "w-5rem" : "w-16rem"}
        h-screen
        surface-card
        transition-all transition-duration-300
      `}
            style={{
                boxShadow: "2px 0 8px rgba(0,0,0,0.04)"
            }}
        >
            {/* Logo */}
            <div className="flex align-items-center justify-content-center h-4rem">
                {collapsed ? (
                    <img
                        src={logo}
                        alt="logo-small"
                        width="40"
                        height="40"
                    />
                ) : (
                    <img
                        src={logo}
                        alt="logo-large"
                        height="40"
                    />
                )}
            </div>

            {/* Menu */}
            <ul className="list-none p-3 m-0 flex flex-column gap-2">

                {/* DASHBOARD */}
                <SidebarItem
                    to="/admin/dashboard"
                    icon="pi pi-home"
                    label="Dashboard"
                    collapsed={collapsed}
                />

                {/* DIVIDER */}
                {!collapsed && <hr className="border-1 surface-border my-2" />}

                {/* ANALYTICS */}
                <SidebarItem
                    to="/admin/analytics"
                    icon="pi pi-chart-line"
                    label="Analytics"
                    badge="5"
                    badgeSeverity="success"
                    collapsed={collapsed}
                />

                {/* ORDERS WITH BADGE */}
                <SidebarItem
                    to="/admin/orders"
                    icon="pi pi-shopping-cart"
                    label="Orders"
                    badge="18"
                    badgeSeverity="danger"
                    collapsed={collapsed}
                />

                {/* PRODUCTS WITH SUBMENU */}
                <SubMenu
                    label="Products"
                    icon="pi pi-box"
                    collapsed={collapsed}
                    items={[
                        { to: "/admin/products", label: "All Products", icon: "pi pi-list" },
                        { to: "/admin/products/create", label: "Add Product", icon: "pi pi-plus" },
                        { to: "/admin/categories", label: "Categories", icon: "pi pi-tags" },
                        { to: "/admin/brands", label: "Brands", icon: "pi pi-star" },
                    ]}
                />

                {/* CUSTOMERS */}
                <SidebarItem
                    to="/admin/customers"
                    icon="pi pi-users"
                    label="Customers"
                    badge="3"
                    badgeSeverity="warning"
                    collapsed={collapsed}
                />

                {/* MARKETING */}
                <SubMenu
                    label="Marketing"
                    icon="pi pi-megaphone"
                    collapsed={collapsed}
                    items={[
                        { to: "/admin/coupons", label: "Coupons", icon: "pi pi-ticket" },
                        { to: "/admin/campaigns", label: "Campaigns", icon: "pi pi-send" },
                        { to: "/admin/banners", label: "Banners", icon: "pi pi-image" },
                    ]}
                />

                {/* INVENTORY */}
                <SidebarItem
                    to="/admin/inventory"
                    icon="pi pi-database"
                    label="Inventory"
                    badge="12"
                    badgeSeverity="info"
                    collapsed={collapsed}
                />

                {/* FINANCE */}
                <SubMenu
                    label="Finance"
                    icon="pi pi-wallet"
                    collapsed={collapsed}
                    items={[
                        { to: "/admin/transactions", label: "Transactions", icon: "pi pi-credit-card" },
                        { to: "/admin/refunds", label: "Refunds", icon: "pi pi-replay" },
                        { to: "/admin/payouts", label: "Payouts", icon: "pi pi-money-bill" },
                    ]}
                />

                {/* REPORTS */}
                <SidebarItem
                    to="/admin/reports"
                    icon="pi pi-file"
                    label="Reports"
                    collapsed={collapsed}
                />

                {!collapsed && <hr className="border-1 surface-border my-2" />}

                {/* SYSTEM */}
                <SubMenu
                    label="System"
                    icon="pi pi-cog"
                    collapsed={collapsed}
                    items={[
                        { to: "/admin/system/configuration", label: "Configuration", icon: "pi pi-sliders-h" },
                        { to: "/admin/system/logs", label: "Logs", icon: "pi pi-file", badge: "12", badgeSeverity: "warning" },
                        { to: "/admin/system/environment", label: "Environment", icon: "pi pi-database" },
                    ]}
                />

                {/* SETTINGS */}
                <SidebarItem
                    to="/admin/settings"
                    icon="pi pi-wrench"
                    label="Settings"
                    collapsed={collapsed}
                />

            </ul>
        </aside>
    );
};

const SidebarItem = ({
    to,
    icon,
    label,
    collapsed,
    badge,
    badgeSeverity = "info",
    dot
}) => {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `
          p-ripple
          flex align-items-center
          gap-3
          px-3 py-2
          border-round-lg
          no-underline
          transition-colors transition-duration-200
          ${isActive
                        ? "bg-primary text-white"
                        : "text-color hover:surface-hover"
                    }
        `
                }
            >
                <i className={icon}></i>

                {!collapsed && (
                    <>
                        <span className="flex-1">{label}</span>

                        {/* DOT INDICATOR */}
                        {dot && (
                            <span
                                className="border-circle bg-primary"
                                style={{ width: "8px", height: "8px" }}
                            />
                        )}

                        {/* BADGE */}
                        {badge && (
                            <Badge value={badge} severity={badgeSeverity} />
                        )}
                    </>
                )}

                <Ripple />
            </NavLink>
        </li>
    );
};

const SubMenu = ({ label, icon, items, collapsed }) => {
    const [open, setOpen] = useState(false);

    return (
        <li>
            <div
                className="p-ripple flex align-items-center gap-3 px-3 py-2 border-round-lg cursor-pointer hover:surface-hover transition-colors transition-duration-200"
                onClick={() => setOpen(!open)}
            >
                <i className={icon}></i>

                {!collapsed && (
                    <>
                        <span className="flex-1">{label}</span>
                        <i className={`pi ${open ? "pi-chevron-down" : "pi-chevron-right"}`}></i>
                    </>
                )}

                <Ripple />
            </div>

            {!collapsed && open && (
                <ul className="list-none pl-4 mt-2 flex flex-column gap-1">
                    {items.map((item, index) => (
                        <SidebarItem key={index} {...item} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default Sidebar;