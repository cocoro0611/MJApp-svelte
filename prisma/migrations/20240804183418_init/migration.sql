-- CreateTable
CREATE TABLE "orders" (
    "id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255),
    "address" VARCHAR(255) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_details" (
    "orderId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "order_details_pkey" PRIMARY KEY ("orderId","itemId")
);

-- CreateTable
CREATE TABLE "items" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255),
    "price" INTEGER NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
