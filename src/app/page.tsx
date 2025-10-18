import { Button } from "@/components/ui/button";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <Button className="hover:bg-gray-100 transition-colors">Click</Button>
        </div>
    );
};

export default Home;
