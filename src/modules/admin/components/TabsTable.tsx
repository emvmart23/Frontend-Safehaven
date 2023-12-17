import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTableDemo } from "./DataTableService";

export function TabsTable() {
  return (
    <Tabs
      defaultValue="account"
      className="w-[50%] mx-auto relative top-[5rem]"
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Trabajadores</TabsTrigger>
        <TabsTrigger value="password">Servicios</TabsTrigger>
        <TabsTrigger value="sam">Solicitudes</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <DataTableDemo />
      </TabsContent>
      <TabsContent value="password">
        <DataTableDemo />
      </TabsContent>
      <TabsContent value="sam">
        <DataTableDemo />
      </TabsContent>
    </Tabs>
  );
}
