
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="text-6xl font-bold text-blue-400 mb-4">404</div>
            <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
            <p className="text-blue-200 mb-6">
              The page you're looking for doesn't exist.
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
