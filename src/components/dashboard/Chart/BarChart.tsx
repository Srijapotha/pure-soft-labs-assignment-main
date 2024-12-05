"use client";

// recharts
import { Bar, BarChart, XAxis, YAxis } from "recharts";

//ui
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

// data
import data from "@/data/task-data.json";

const chartData = data.activity.monthly;

const chartConfig = {
  value: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function BarChartComponent() {
  return (
    <ChartContainer config={chartConfig} className="-ml-6 h-full w-full">
      <BarChart barSize={8} accessibilityLayer data={chartData}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-value)"
              stopOpacity={0.6}
            />
            <stop offset="100%" stopColor="var(--color-value)" />
          </linearGradient>
        </defs>
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          tickFormatter={(value) => `${value}`} // Example: Adding a percentage sign
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar
          dataKey="value"
          fill="url(#barGradient)"
          radius={8}
          background={{ fill: "var(--color-value)", radius: 10, opacity: 0.1 }} // Simple background rendering
        />
      </BarChart>
    </ChartContainer>
  );
}
