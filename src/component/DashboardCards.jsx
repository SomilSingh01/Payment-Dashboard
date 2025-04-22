import React from "react";

const Card = ({ title, amount, count, badge }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col gap-1 relative">
    <div className="text-sm text-gray-500">{title}</div>
    <div className="text-2xl font-bold">{amount}</div>
    <div className="text-sm text-gray-600">counts: {count}</div>
    {badge && (
      <span
        className={`absolute top-2 right-2 text-xs font-semibold px-2 py-0.5 rounded ${badge.color}`}
      >
        {badge.label}
      </span>
    )}
  </div>
);

export default function DashboardCards() {
  return (
    <div className="p-4">
      <div className="border p-4 rounded-lg mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span className="text-green-600">⚠️</span> Static Data
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-4">
        <Card
          title="Today's Pay-in:"
          amount="9040.00"
          count="4"
          badge={{ label: "📄", color: "bg-blue-500 text-white" }}
        />
        <Card
          title="Today's Pay-out:"
          amount="2887.00"
          count="0"
          badge={{ label: "📄", color: "bg-blue-500 text-white" }}
        />
        <Card
          title="Yesterday's Pay-in"
          amount="12422.00"
          count="1"
          badge={{ label: "📄", color: "bg-blue-500 text-white" }}
        />
        <Card
          title="Yesterday's Pay-out"
          amount="2445.00"
          count="0"
          badge={{ label: "📄", color: "bg-blue-500 text-white" }}
        />
        <Card
          title="All Balance"
          amount="1556665.94"
          count="-"
          badge={{ label: "New", color: "bg-yellow-400 text-white" }}
        />
        <Card
          title="Available Balance"
          amount="364567.94"
          count="-"
          badge={{ label: "New", color: "bg-emerald-500 text-white" }}
        />
      </div>
    </div>
  );
}
