import { Outlet } from "react-router";
import SiteHeader from "./SiteHeader/SiteHeader";
import SiteFooter from "./SiteFooter/SiteFooter";
import PurchaseModal from "../ui/PurchaseModal/PurchaseModal";
import { useState } from "react";

const PublicLayout = () => {
  const [purchaseData, setPurchaseData] = useState({
    open: false,
    productId: "",
    serviceId: "",
    price: 0,
  });

  const openPurchaseModal = (data) => {
    setPurchaseData({
      open: true,
      ...data,
    });
  };

  const closePurchaseModal = () => {
    setPurchaseData({
      open: false,
      productId: "",
      serviceId: "",
      price: 0,
    });
  };

  return (
    <>
      <SiteHeader />
      <Outlet context={{ openPurchaseModal }} />

      <PurchaseModal
        open={purchaseData.open}
        setOpen={closePurchaseModal}
        productId={purchaseData.productId}
        serviceId={purchaseData.serviceId}
        price={purchaseData.price}
      />

      <SiteFooter />
    </>
  );
};

export default PublicLayout;
