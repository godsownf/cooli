import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Download, Upload } from "lucide-react";
import CookieManager from "../components/CookieManager";
import SessionBackup from "../components/SessionBackup";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Session Vault
            </h1>
            <p className="text-slate-500 mt-1">
              Local-only session and cookie management for personal backup
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="cookies" className="space-y-6">
          <TabsList className="bg-white border border-slate-200 p-1">
            <TabsTrigger value="cookies" className="data-[state=active]:bg-slate-100">
              <Database className="w-4 h-4 mr-2" />
              Cookie Manager
            </TabsTrigger>
            <TabsTrigger value="backup" className="data-[state=active]:bg-slate-100">
              <Upload className="w-4 h-4 mr-2" />
              Backup & Restore
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cookies">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle>Active Cookies</CardTitle>
                <CardDescription>
                  View and manage cookies stored in your current browser session.
                  All operations are performed locally on your device.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CookieManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backup">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle>Session Backup</CardTitle>
                <CardDescription>
                  Export your current session data to a secure local file, or restore
                  from a previous backup.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SessionBackup />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Security Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
          <Shield className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-amber-800">
            <strong>Privacy Notice:</strong> This tool runs entirely in your browser.
            No data is sent to any server. Backups are saved as JSON files on your
            local machine. Keep your backup files secure as they contain sensitive
            session tokens.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
