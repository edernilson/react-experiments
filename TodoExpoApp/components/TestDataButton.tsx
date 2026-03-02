import { Button } from "react-native";

export default function TestDataButton({ onAddTestData }: { onAddTestData: () => void }) {
    
    return (
        <Button title="Add To-do" onPress={onAddTestData} />
    );
}