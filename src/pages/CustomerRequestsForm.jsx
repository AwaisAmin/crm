import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CustomerRequestsForm() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white py-2 text-center">
        <h1 className="text-2xl font-bold">CUSTOMER REQUESTS</h1>
      </header>

      {/* Main Form */}
      <div className="flex-1 p-2 border border-gray-300 bg-gray-200 m-1">
        {/* Top Row */}
        <div className="bg-gray-100 p-2 mb-2 border border-gray-300">
          <div className="flex flex-wrap">
            <div className="flex items-center mr-8">
              <label htmlFor="requestId" className="mr-2 font-medium">
                Request ID
              </label>
              <Input id="requestId" className="w-48 bg-white" />
            </div>
            <div className="flex items-center">
              <label htmlFor="date" className="mr-2 font-medium">
                Date
              </label>
              <Select defaultValue="17-Mar-2025">
                <SelectTrigger className="w-48 bg-white">
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="17-Mar-2025">17-Mar-2025</SelectItem>
                  <SelectItem value="18-Mar-2025">18-Mar-2025</SelectItem>
                  <SelectItem value="19-Mar-2025">19-Mar-2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          {/* Left Column */}
          <div className="w-full md:w-1/2 bg-gray-100 p-2 border border-gray-300">
            <div className="grid grid-cols-[120px_1fr] gap-y-2 items-center">
              <label htmlFor="factory" className="text-right pr-2 font-medium">
                Factory/ Client
              </label>
              <Input id="factory" className="bg-white" />

              <label htmlFor="address" className="text-right pr-2 font-medium">
                Address
              </label>
              <Textarea id="address" className="h-24 bg-white" />

              <label
                htmlFor="representative"
                className="text-right pr-2 font-medium"
              >
                Representative
              </label>
              <Input id="representative" className="bg-white" />

              <label
                htmlFor="designation"
                className="text-right pr-2 font-medium"
              >
                Designation
              </label>
              <Input id="designation" className="bg-white" />

              <label htmlFor="email" className="text-right pr-2 font-medium">
                Email
              </label>
              <Input id="email" className="bg-white" />

              <label htmlFor="mobile" className="text-right pr-2 font-medium">
                Mobile No
              </label>
              <Input id="mobile" className="bg-white" />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-gray-100 p-2 border border-gray-300">
            <div className="grid grid-cols-[160px_80px_80px_80px] gap-2 items-center mb-2">
              <label
                htmlFor="employees"
                className="text-right pr-2 font-medium"
              >
                No. of Employees
              </label>
              <Input id="employees" className="bg-white" />

              <label htmlFor="male" className="text-right pr-2 font-medium">
                Male
              </label>
              <Input id="male" className="bg-white" />

              <label htmlFor="shifts" className="text-right pr-2 font-medium">
                No. of Shifts
              </label>
              <Input id="shifts" className="bg-white" />

              <label htmlFor="area" className="text-right pr-2 font-medium">
                Area of Factory (Sqft)
              </label>
              <Input id="area" className="bg-white" />

              <label htmlFor="female" className="text-right pr-2 font-medium">
                Female
              </label>
              <Input id="female" className="bg-white" />
            </div>

            <div className="grid grid-cols-[160px_1fr] gap-2 items-center">
              <label htmlFor="capacity" className="text-right pr-2 font-medium">
                Production Capacity
              </label>
              <Input id="capacity" className="bg-white" />

              <label
                htmlFor="processes"
                className="text-right pr-2 self-start font-medium"
              >
                Major Production Processes
              </label>
              <Textarea id="processes" className="h-24 bg-white" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mb-2">
          <div className="flex flex-col items-center mr-4">
            <Button
              variant="outline"
              className="bg-white border-gray-400 h-8 px-2 mb-1 flex items-center cursor-pointer"
            >
              <span className="mr-2">📄</span> New
            </Button>
          </div>
        </div>

        {/* Tabs Row */}
        <div className="flex mb-2">
          <div className="bg-gray-100 border border-gray-300 px-4 py-1 font-medium">
            HIGG FEM
          </div>
          <div className="bg-white border-t border-r border-b border-gray-300 px-4 py-1">
            SLCP
          </div>
          <div className="bg-white border-t border-r border-b border-gray-300 px-4 py-1">
            C-TPAT Audit
          </div>
          <div className="bg-white border-t border-r border-b border-gray-300 px-4 py-1">
            ISO
          </div>
          <div className="bg-white border-t border-r border-b border-gray-300 px-4 py-1">
            Environmental
          </div>
          <div className="bg-white border-t border-r border-b border-gray-300 px-4 py-1">
            Sustainability
          </div>
        </div>

        {/* Verification Section */}
        <div className="bg-gray-100 border border-gray-300 p-2 mb-2">
          <div className="flex items-center mb-2">
            <Checkbox id="verification" className="mr-2" />
            <label htmlFor="verification" className="font-medium">
              Verification
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            {/* Left Verification */}
            <div className="w-full md:w-1/2 border border-gray-300 p-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <Checkbox id="first-time" className="mr-2 mt-1" />
                  <label htmlFor="first-time">
                    Is it the first time verification at your facility?
                  </label>
                </div>
                <div className="flex items-start">
                  <Checkbox id="wet-process" className="mr-2 mt-1" />
                  <label htmlFor="wet-process">
                    Does your facility has any wet Process (i-e Washing, Dyeing
                    etc.)
                  </label>
                </div>
                <div className="flex items-start">
                  <Checkbox id="etp" className="mr-2 mt-1" />
                  <label htmlFor="etp">
                    Does your facility have onsite ETP?
                  </label>
                </div>
                <div className="flex items-start">
                  <Checkbox id="foundation" className="mr-2 mt-1" />
                  <label htmlFor="foundation">
                    Have you completed only foundation ?
                  </label>
                </div>
                <div className="flex items-start">
                  <Checkbox id="chemical" className="mr-2 mt-1" />
                  <label htmlFor="chemical">
                    Have you completed Level 2/ Level 3 for Chemical section?
                  </label>
                </div>
              </div>
            </div>

            {/* Right Verification */}
            <div className="w-full md:w-1/2 p-2 border border-gray-300">
              <div className="mb-4">
                <div className="flex items-center">
                  <label className="mr-4 font-medium">Verification Type</label>
                  <div className="flex items-center mr-4">
                    <Checkbox id="onsite" className="mr-2" />
                    <label htmlFor="onsite">Onsite</label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="offsite" className="mr-2" />
                    <label htmlFor="offsite">Offsite</label>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="language" className="mr-2 font-medium">
                  Language used for most of the employees
                </label>
                <Input id="language" className="w-32 bg-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex justify-between">
          <div></div>
          <div className="flex items-center gap-5">
            <Button
              variant="outline"
              className="bg-white border-gray-400 h-8 px-2 mb-1 flex items-center cursor-pointer"
            >
              <span className="mr-2">💾</span> Save
            </Button>
            <Button
              variant="outline"
              className="bg-white border-gray-400 h-8 px-2 mb-1 flex items-center cursor-pointer"
            >
              <span className="mr-2">✏️</span> Modify
            </Button>
            <Button
              variant="outline"
              className="bg-white border-gray-400 h-8 px-2 mb-1 flex items-center cursor-pointer"
            >
              <span className="mr-2">✂️</span> Delete
            </Button>
            <Button
              variant="outline"
              className="bg-white border-gray-400 h-8 px-2 mb-1 flex items-center cursor-pointer"
            >
              <span className="mr-2">🚪</span> Exit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
