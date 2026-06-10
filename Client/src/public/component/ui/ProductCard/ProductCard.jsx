import { useState } from "react";
import styles from "./ProductCard.module.css";
import { CircleCheck, ArrowRight } from "lucide-react";
import { useOutletContext } from "react-router";

function ProductCard({ product, idx }) {
  const { openPurchaseModal } = useOutletContext();

  const [selectedSession, setSelectedSession] = useState(
    product?.pricing?.sessions?.[0],
  );

  const handleBuyNow = () => {
    let price = 0;

    if (product?.pricing?.type === "fixed") {
      price = product?.pricing?.price;
    } else if (product?.pricing?.type === "session") {
      price = selectedSession?.price;
    } else {
      price = 0;
    }

    openPurchaseModal({
      productId: product._id,
      serviceId: product.service,
      price,
    });
  };

  return (
    <div className={styles.productWrapper}>
      <div
        className={`
          ${styles.productCard}
          ${product?.isPremium ? styles.isPremium : ""}
        `}
      >
        <div>
          <p className={styles.productLabel}>{`Product ${idx + 1}`}</p>

          <h1 className={styles.productTitle}>{product?.title}</h1>

          <p className={styles.productSubtitle}>{product?.subtitle}</p>

          <h2 className={styles.productPrice}>
            {/* FREE */}

            {product?.pricing?.type === "free" && "Free"}

            {/* FIXED */}

            {product?.pricing?.type === "fixed" && (
              <>
                ₹ {product?.pricing?.price}
                <span className={styles.gstText}> + GST</span>
              </>
            )}

            {/* SESSION */}

            {product?.pricing?.type === "session" && (
              <>
                <div className={styles.sessionOptions}>
                  {product?.pricing?.sessions?.map((session, index) => (
                    <label
                      key={index}
                      className={`
                          ${styles.sessionOption}
                          ${
                            selectedSession?.sessionCount ===
                            session?.sessionCount
                              ? styles.active
                              : ""
                          }
                        `}
                    >
                      <input
                        type="radio"
                        name={`session-${product._id}`}
                        checked={
                          selectedSession?.sessionCount ===
                          session?.sessionCount
                        }
                        onChange={() => setSelectedSession(session)}
                      />

                      {session?.label}
                    </label>
                  ))}
                </div>

                <div className={styles.sessionPrice}>
                  ₹ {selectedSession?.price}
                  <span className={styles.gstText}> + GST</span>
                </div>
              </>
            )}
          </h2>

          <div className={styles.divider}></div>

          {/* FEATURES */}

          <div className={styles.featureBox}>
            {product?.features?.map((feature, idx) => (
              <div className={styles.featureContainer} key={idx}>
                <div className={styles.featureIcon}>
                  <CircleCheck size={20} strokeWidth={1.8} />
                </div>

                <div className={styles.features}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>

                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={
            product?.isPremium ? styles.isPremiumButton : styles.startBtn
          }
          onClick={handleBuyNow}
        >
          {product?.buttonText}
          <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
