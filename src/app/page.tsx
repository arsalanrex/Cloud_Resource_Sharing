"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid } from "@/components/grid";
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarSeparator, SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { Home, Server, Settings, PlusCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialResources = [
  { id: 1, name: "Resource A", status: "available", cpu: "4 cores", memory: "16 GB" },
  { id: 2, name: "Resource B", status: "allocated", cpu: "8 cores", memory: "32 GB" },
  { id: 3, name: "Resource C", status: "available", cpu: "2 cores", memory: "8 GB" },
];

const initialRequests = [
  { id: 101, description: "Request for AI training", status: "pending", cpu: "8 cores", memory: "32 GB" },
  { id: 102, description: "Request for web server", status: "fulfilled", cpu: "2 cores", memory: "4 GB" },
];

export function DashboardPage() {
  const [availableResources, setAvailableResources] = useState(initialResources.filter(r => r.status === "available"));
  const [allocatedResources, setAllocatedResources] = useState(initialResources.filter(r => r.status === "allocated"));
  const [pendingRequests, setPendingRequests] = useState(initialRequests.filter(req => req.status === "pending"));
  const [fulfilledRequests, setFulfilledRequests] = useState(initialRequests.filter(req => req.status === "fulfilled"));

  useEffect(() => {
    // Mock API calls to fetch resource data and requests
    // Replace with actual API endpoints when available
    console.log("Fetching data from API...");

    // Simulate fetching available resources
    setTimeout(() => {
      setAvailableResources(initialResources.filter(r => r.status === "available"));
    }, 500);

    // Simulate fetching allocated resources
    setTimeout(() => {
      setAllocatedResources(initialResources.filter(r => r.status === "allocated"));
    }, 750);

    // Simulate fetching pending requests
    setTimeout(() => {
      setPendingRequests(initialRequests.filter(req => req.status === "pending"));
    }, 1000);

    // Simulate fetching fulfilled requests
    setTimeout(() => {
      setFulfilledRequests(initialRequests.filter(req => req.status === "fulfilled"));
    }, 1250);

  }, []);

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <h2 className="font-semibold text-lg">ResPool Gateway</h2>
          <p className="text-sm text-muted-foreground">Decentralized Resources</p>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start" >
                    <Home className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <Server className="mr-2 h-4 w-4" />
                    <span>Resources</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>Register Resource</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Preferences</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="justify-start">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    <span>Optimization</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <Grid>
        <Card>
          <CardHeader>
            <CardTitle>Available Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {availableResources.map((resource) => (
                <li key={resource.id}>
                  {resource.name} - {resource.cpu}, {resource.memory}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Allocated Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {allocatedResources.map((resource) => (
                <li key={resource.id}>
                  {resource.name} - {resource.cpu}, {resource.memory}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {pendingRequests.map((request) => (
                <li key={request.id}>
                  {request.description} - {request.cpu}, {request.memory}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fulfilled Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {fulfilledRequests.map((request) => (
                <li key={request.id}>
                  {request.description} - {request.cpu}, {request.memory}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </SidebarProvider>
  );
}

export default DashboardPage;

    

