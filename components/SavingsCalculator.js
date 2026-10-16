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
  const getPercent = (val, min, max) => ((val - min) / (max - min)) * 100;

  const adjustValue = (setter, current, delta, min, max) => {
    const next = Math.min(max, Math.max(min, current + delta));
    setter(next);
  };

  return (
    <div className="calc">
      <div className="calc-header-row">
        <span className="pill pill-glow">
          <span className="dot dot-pulse" /> Боломжит хэмнэлтийн тооцоолуур
        </span>
      </div>

      {/* Control 1: Orders */}
      <div className="calc-card">
        <div className="calc-card-header">
          <div>
            <label htmlFor="orders" className="calc-label-title">
              Өдөрт хамт савлуулсан худалдан авалт
            </label>
            <span className="calc-label-hint">Салбар бүрийн өдрийн дундаж тоо</span>
          </div>
          <div className="calc-stepper-box">
            <button
              type="button"
              className="calc-stepper-btn"
              aria-label="Захиалгын тоог 1-ээр хасах"
              onClick={() => adjustValue(setOrders, orders, -1, 0, 100)}
            >
              −
            </button>
            <output id="ordersOut" className="calc-badge-output">
              {orders}
            </output>
            <button
              type="button"
              className="calc-stepper-btn"
              aria-label="Захиалгын тоог 1-ээр нэмэх"
              onClick={() => adjustValue(setOrders, orders, 1, 0, 100)}
            >
              +
            </button>
          </div>
        </div>

        <input
          id="orders"
          className="calc-slider"
          type="range"
          min="0"
          max="100"
          value={orders}
          style={{
            background: `linear-gradient(to right, #d8f266 0%, #d8f266 ${getPercent(orders, 0, 100)}%, rgba(255, 255, 255, 0.12) ${getPercent(orders, 0, 100)}%, rgba(255, 255, 255, 0.12) 100%)`,
          }}
          onChange={(e) => setOrders(Number(e.target.value))}
        />

        <div className="calc-scale-labels">
          <span>0 захиалга</span>
          <span>50</span>
          <span>100 захиалга</span>
        </div>

      </div>

      {/* Control 2: Bags saved per order */}
      <div className="calc-card">
        <div className="calc-card-header">
          <div>
            <label htmlFor="bags" className="calc-label-title">
              Нэг худалдан авалтад хэмнэсэн уут
            </label>
            <span className="calc-label-hint">Хамтад нь савласнаар хэмнэх жижиг уут</span>
          </div>
          <div className="calc-stepper-box">
            <button
              type="button"
              className="calc-stepper-btn"
              aria-label="Хэмнэсэн уутны тоог 1-ээр хасах"
              onClick={() => adjustValue(setBags, bags, -1, 1, 10)}
            >
              −
            </button>
            <output id="bagsOut" className="calc-badge-output">
              {bags}
            </output>
            <button
              type="button"
              className="calc-stepper-btn"
              aria-label="Хэмнэсэн уутны тоог 1-ээр нэмэх"
              onClick={() => adjustValue(setBags, bags, 1, 1, 10)}
            >
              +
            </button>
          </div>
        </div>

        <input
          id="bags"
          className="calc-slider"
          type="range"
          min="1"
          max="10"
          value={bags}
          style={{
            background: `linear-gradient(to right, #d8f266 0%, #d8f266 ${getPercent(bags, 1, 10)}%, rgba(255, 255, 255, 0.12) ${getPercent(bags, 1, 10)}%, rgba(255, 255, 255, 0.12) 100%)`,
          }}
          onChange={(e) => setBags(Number(e.target.value))}
        />

        <div className="calc-scale-labels">
          <span>1 уут</span>
          <span>5</span>
          <span>10 уут</span>
        </div>

      </div>

      {/* Control 3: Branches */}
      <div className="calc-card">
        <div className="calc-card-header">
          <div>
            <label htmlFor="branches" className="calc-label-title">
              Салбарын тоо
            </label>
            <span className="calc-label-hint">Төсөлд хамрагдах Tous Les Jours салбарууд</span>
          </div>
          <div className="calc-stepper-box">
            <button
              type="button"
              className="calc-stepper-btn"
              aria-label="Салбарын тоог 1-ээр хасах"
              onClick={() => adjustValue(setBranches, branches, -1, 1, 100)}
            >
              −
            </button>
            <output id="branchesOut" className="calc-badge-output">
              {branches}
            </output>
            <button
              type="button"
              className="calc-stepper-btn"
              aria-label="Салбарын тоог 1-ээр нэмэх"
              onClick={() => adjustValue(setBranches, branches, 1, 1, 100)}
            >
              +
            </button>
          </div>
        </div>

        <input
          id="branches"
          className="calc-slider"
          type="range"
          min="1"
          max="100"
          value={branches}
          style={{
            background: `linear-gradient(to right, #d8f266 0%, #d8f266 ${getPercent(branches, 1, 100)}%, rgba(255, 255, 255, 0.12) ${getPercent(branches, 1, 100)}%, rgba(255, 255, 255, 0.12) 100%)`,
          }}
          onChange={(e) => setBranches(Number(e.target.value))}
        />

        <div className="calc-scale-labels">
          <span>1 салбар</span>
          <span>50</span>
          <span>100 салбар</span>
        </div>

      </div>

      {/* Total Impact Display */}
      <div className="total total-card" aria-live="polite">
        <div className="total-header">
          <div className="eyebrow" style={{ color: '#c8d4c6', margin: 0 }}>
            Жилд багасгах боломжтой уут
          </div>
          <span className="total-tag">Хэмнэлтийн таамаг</span>
        </div>

        <div className="total-annual-hero">
          <div className="metric" id="annual">
            {format(annual)}
          </div>
          <span className="metric-unit">уут / жил</span>
        </div>

        <div className="formula" id="formula">
          {`${orders} × ${bags} × ${branches} × 365 хоног`}
        </div>

        <div className="total-subgrid">
          <div className="total-subcard">
            <span className="total-subcard-title">Өдөрт хэмнэх</span>
            <div className="total-subcard-value">
              <span id="daily">{format(daily)}</span> <span>уут / өдөр</span>
            </div>
          </div>
          <div className="total-subcard">
            <span className="total-subcard-title">30 хоногт хэмнэх</span>
            <div className="total-subcard-value">
              <span id="monthly">{format(monthly)}</span> <span>уут / сар</span>
            </div>
          </div>
        </div>

        <p className="note" style={{ marginTop: '16px', marginBottom: 0 }}>
          Таамаг тооцоо: бодит үр дүн нь хэрэглэгчийн сонголт болон салбарын борлуулалтаас хамаарна.
        </p>
      </div>
    </div>
  );
}
