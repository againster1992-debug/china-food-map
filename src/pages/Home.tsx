import FoodMap from "@/components/FoodMap";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import DetailPanel from "@/components/DetailPanel";
import FilterPanel from "@/components/FilterPanel";
import ProvincePanel from "@/components/ProvincePanel";
import CuisinePanel from "@/components/CuisinePanel";
import RestaurantPanel from "@/components/RestaurantPanel";
import EnclavePanel from "@/components/EnclavePanel";
import Legend from "@/components/Legend";
import AuthModal from "@/components/AuthModal";
import AccountPanel from "@/components/AccountPanel";
import { useStore } from "@/store/useStore";
import { PanelLeft } from "lucide-react";

export default function Home() {
  const sidebarOpen = useStore((s) => s.sidebarOpen);
  const setSidebarOpen = useStore((s) => s.setSidebarOpen);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-paper-100">
      <TopBar />

      <div className="relative flex flex-1 overflow-hidden">
        {/* 左侧索引 */}
        <Sidebar />

        {/* 侧边栏收起时的展开按钮 */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="absolute left-3 top-3 z-[1000] flex h-9 w-9 items-center justify-center rounded-lg border border-ochre-500/20 bg-paper-50/90 text-ink-700 shadow-ink backdrop-blur transition-colors hover:bg-paper-200"
            aria-label="展开索引面板"
          >
            <PanelLeft size={18} />
          </button>
        )}

        {/* 中央地图 */}
        <main className="relative flex-1 overflow-hidden">
          <FoodMap />
          <Legend />
        </main>
      </div>

      {/* 右侧详情面板 */}
      <DetailPanel />

      {/* 筛选面板 */}
      <FilterPanel />

      {/* 省份十大美食面板 */}
      <ProvincePanel />

      {/* 菜系详情面板 */}
      <CuisinePanel />

      {/* 知名餐厅查询面板 */}
      <RestaurantPanel />

      {/* 特殊饮食聚集区面板 */}
      <EnclavePanel />

      {/* 用户认证弹窗 */}
      <AuthModal />

      {/* 个人中心面板 */}
      <AccountPanel />
    </div>
  );
}
