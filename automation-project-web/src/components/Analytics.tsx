import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const performanceData = [
    { name: 'Week 1', tests: 45, passed: 42, failed: 3 },
    { name: 'Week 2', tests: 67, passed: 65, failed: 2 },
    { name: 'Week 3', tests: 89, passed: 86, failed: 3 },
    { name: 'Week 4', tests: 123, passed: 119, failed: 4 },
    { name: 'Week 5', tests: 156, passed: 152, failed: 4 },
    { name: 'Week 6', tests: 189, passed: 185, failed: 4 },
  ];

  const coverageData = [
    { name: 'Frontend', coverage: 92 },
    { name: 'API', coverage: 88 },
    { name: 'Database', coverage: 95 },
    { name: 'Integration', coverage: 78 },
  ];

  const distributionData = [
    { name: 'Unit Tests', value: 40, color: '#00BFFF' },
    { name: 'Integration', value: 30, color: '#9945FF' },
    { name: 'E2E Tests', value: 20, color: '#00FFFF' },
    { name: 'API Tests', value: 10, color: '#FF6B6B' },
  ];

  return (
    <section id="analytics" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Project Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time insights and performance metrics from our automation framework
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-card/50 border-border card-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Test Execution Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line type="monotone" dataKey="tests" stroke="#00BFFF" strokeWidth={3} dot={{ fill: '#00BFFF' }} />
                  <Line type="monotone" dataKey="passed" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981' }} />
                  <Line type="monotone" dataKey="failed" stroke="#EF4444" strokeWidth={2} dot={{ fill: '#EF4444' }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-border card-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Test Coverage by Module</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={coverageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="coverage" fill="url(#gradient)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00BFFF" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9945FF" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-border card-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Test Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {distributionData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-card/50 border-border text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">99.2%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </Card>
              <Card className="p-6 bg-card/50 border-border text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">3.2s</h3>
                <p className="text-muted-foreground">Avg Test Time</p>
              </Card>
            </div>
            
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Test Cases</span>
                  <span className="font-semibold text-primary">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Automation Coverage</span>
                  <span className="font-semibold text-accent">89.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Parallel Execution</span>
                  <span className="font-semibold text-primary">8x Speed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Report Generation</span>
                  <span className="font-semibold text-accent">Real-time</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;