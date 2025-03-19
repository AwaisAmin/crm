"use client";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Users, Award, UserCheck, Clock, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Calendar from "react-calendar";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [date, setDate] = useState(new Date());

  // CRM Stats
  const stats = [
    {
      title: "Customers",
      value: "150",
      icon: Users,
      color: "bg-indigo-600",
      linkPath: "/dashboard/clients",
    },
    {
      title: "Certifications",
      value: "15",
      icon: Award,
      color: "bg-emerald-500",
      linkPath: "/dashboard/certifications",
    },
    {
      title: "Auditors",
      value: "44",
      icon: UserCheck,
      color: "bg-amber-400",
      linkPath: "/dashboard/auditors",
    },
    {
      title: "In Progress",
      value: "56",
      icon: Clock,
      color: "bg-rose-500",
      linkPath: "/dashboard/in-progress",
    },
  ];

  // Sales Chart Data
  const salesChartData = {
    labels: ["JAN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "This Year",
        data: [8000, 11000, 14000, 12000, 13000, 14000, 15000],
        backgroundColor: "#3498db",
      },
      {
        label: "Last Year",
        data: [5000, 7000, 10000, 10000, 11000, 10000, 12000],
        backgroundColor: "#95a5a6",
      },
    ],
  };

  // Summary Pie Chart Data
  const summaryChartData = {
    labels: [
      "In Progress",
      "Completed",
      "Next Due",
      "Total",
      "In Registration",
    ],
    datasets: [
      {
        data: [17.2, 24.1, 13.8, 34.5, 10.4],
        backgroundColor: [
          "#e74c3c",
          "#2ecc71",
          "#f1c40f",
          "#1abc9c",
          "#3498db",
        ],
      },
    ],
  };

  // Customers Progress Bar Chart
  const customersProgressData = {
    labels: ["Nestle", "Paki...", "Des...", "Ra...", "Hubco Power"],
    datasets: [
      {
        label: "Progress",
        data: [90, 85, 75, 70, 50],
        backgroundColor: [
          "#3498db",
          "#e74c3c",
          "#e74c3c",
          "#2ecc71",
          "#f1c40f",
        ],
      },
    ],
  };

  const logs = [
    {
      id: 1,
      action: "User Login",
      user: "John Doe",
      time: "2025-03-18 10:45 AM",
    },
    {
      id: 2,
      action: "Updated Profile",
      user: "Jane Smith",
      time: "2025-03-18 11:10 AM",
    },
    {
      id: 3,
      action: "Added New Client",
      user: "David Johnson",
      time: "2025-03-18 12:30 PM",
    },
    {
      id: 4,
      action: "Deleted an Invoice",
      user: "Chris Brown",
      time: "2025-03-18 1:15 PM",
    },
    {
      id: 5,
      action: "Scheduled Meeting",
      user: "Michael Lee",
      time: "2025-03-18 2:50 PM",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardContent className="p-0">
              <div className="flex items-center">
                <div
                  className={`${stat.color} text-white p-6 flex items-center justify-center`}
                >
                  <stat.icon size={32} />
                </div>
                <div className="flex-1 p-4">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-gray-500">{stat.title}</div>
                </div>
                <div className="p-4 flex flex-col items-end">
                  <a
                    href={stat.linkPath}
                    className="text-sm text-gray-500 hover:text-blue-600"
                  >
                    More info
                  </a>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Sales Over Time</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Bar
              data={salesChartData}
              options={{ maintainAspectRatio: false }}
            />
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Summary</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Doughnut
              data={summaryChartData}
              options={{ maintainAspectRatio: false }}
            />
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Customers Progress</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Bar
              data={customersProgressData}
              options={{ maintainAspectRatio: false }}
            />
          </CardContent>
        </Card>
      </div>

      {/* CRM Calendar and Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CRM Calendar */}
        <Card className="shadow-md h-full w-full flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">Calendar</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex">
            <div className="w-full h-full flex justify-center items-center">
              <Calendar
                onChange={setDate}
                value={date}
                className="w-full h-full border rounded-lg shadow-md p-4"
              />
            </div>
          </CardContent>
        </Card>

        {/* CRM Logs */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead className="font-semibold">Action</TableHead>
                    <TableHead className="font-semibold">User</TableHead>
                    <TableHead className="font-semibold">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.map((log) => (
                    <TableRow key={log.id} className="hover:bg-gray-50">
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell>{log.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
