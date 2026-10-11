'use client';

import { useState } from 'react';

export default function SavingsCalculator() {
  const [orders, setOrders] = useState(20);
  const [bags, setBags] = useState(4);
  const [branches, setBranches] = useState(1);

  const daily = orders * bags * branches;
  const monthly = daily * 30;
  const annual = daily * 365;

  const format = (n) => n.toLocaleString('en-US');

  return (
    <div className="calc">
      <span className="pill" style={{ borderColor: '#ffffff40' }}>
        Боломжит хэмнэлтийн тооцоолуур
      </span>
      <label htmlFor="orders">
        Өдөрт хамт савлуулсан худалдан авалт <output id="ordersOut">{orders}</output>
      </label>
      <input
        id="orders"
        type="range"
        min="0"
        max="100"
        value={orders}
        onChange={(e) => setOrders(Number(e.target.value))}
      />

      <label htmlFor="bags">
        Нэг худалдан авалтад хэмнэсэн уут <output id="bagsOut">{bags}</output>
      </label>
      <input
        id="bags"
        type="range"
        min="1"
        max="10"
        value={bags}
        onChange={(e) => setBags(Number(e.target.value))}
      />

      <label htmlFor="branches">
        Салбарын тоо <output id="branchesOut">{branches}</output>
      </label>
      <input
        id="branches"
        type="range"
        min="1"
        max="100"
        value={branches}
        onChange={(e) => setBranches(Number(e.target.value))}
      />

      <div className="total" aria-live="polite">
        <div className="eyebrow" style={{ color: '#c8d4c6' }}>
          Жилд багасгах боломжтой уут
        </div>
        <div className="metric" id="annual">
          {format(annual)}
        </div>
        <div className="formula" id="formula">
          {`${orders} × ${bags} × ${branches} × 365 хоног`}
        </div>
        <p className="note">
          <span id="daily">{format(daily)}</span> уут / өдөр ·{' '}
          <span id="monthly">{format(monthly)}</span> уут / 30 хоног
        </p>
      </div>
    </div>
  );
}

