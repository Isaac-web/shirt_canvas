"use client";

import AppTable from "@components/AppTable";
import { recentOrdersColumns } from "@constants/ordersPage";
import useFetch from "@hooks/useFetch";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  const { data, isLoading, error } = useFetch();

  return (
    <section className="w-full min-h-screen bg-gray-50 py-10">
      <div className="container m-auto max-w-6xl">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="flex flex-row justify-between gap-6 mb-8">
          <div className="flex flex-row gap-x-3 w-1/3 p-8 rounded-lg shadow-md bg-white">
            <Image
              src=""
              alt="Icon"
              width={100}
              height={100}
              className="w-14 h-14 rounded-xl bg-gray-100"
            />
            <div>
              <p className="text-gray-500 text-sm">New Orders</p>
              <h3 className="font-bold text-4xl">23</h3>
            </div>
          </div>

          <div className="flex flex-row gap-x-3 w-1/3 p-8 rounded-lg shadow-md bg-white">
            <Image
              src=""
              alt="Icon"
              width={100}
              height={100}
              className="w-14 h-14 rounded-xl bg-gray-100"
            />
            <div>
              <p className="text-gray-500 text-sm">Processing</p>
              <h3 className="font-bold text-4xl">11</h3>
            </div>
          </div>

          <div className="flex flex-row gap-x-3 w-1/3 p-8 rounded-lg shadow-md bg-white">
            <Image
              src=""
              alt="Icon"
              width={100}
              height={100}
              className="w-14 h-14 rounded-xl bg-gray-100"
            />
            <div>
              <p className="text-gray-500 text-sm">Delivered</p>
              <h3 className="font-bold text-4xl">103</h3>
            </div>
          </div>
        </div>

        <div>
          {data?.isLoading ? (
            <div>Loading...</div>
          ) : !data?.isLoading && !data?.orders.length ? (
            <div>There are no orders yet</div>
          ) : (
            <div>
              {data.orders.map((item) => (
                <AppTable columns={recentOrdersColumns} data={data?.orders} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
