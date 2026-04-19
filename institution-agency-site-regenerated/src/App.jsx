import { useState } from 'react'

const painPoints = [
  {
    title: '机构想做直播，但内部没人真正会做',
    desc: '不会搭直播间，不会做账号定位，不会写直播话术，最后账号开了，直播也播不起来。',
  },
  {
    title: '老师有空场地有资源，但不会转化',
    desc: '很多机构周一到周五老师和场地都是闲着的，但不知道怎么把线上流量变成试听、到店和签单。',
  },
  {
    title: '试过自己播，播了几场就没信心了',
    desc: '不是机构不愿意投入，而是没有一整套从起号、直播、承接到成交的完整流程。',
  },
]

const services = [
  {
    title: '账号定位与起号陪跑',
    items: ['机构诊断', '赛道定位', '内容栏目设计', '起号节奏规划'],
  },
  {
    title: '直播间搭建与主播训练',
    items: ['直播场景规划', '设备建议', '主播训练', '开播复盘'],
  },
  {
    title: '公域引流与私域承接',
    items: ['引流话术', '私信承接', '表单设计', '社群跟进流程'],
  },
  {
    title: '招生官网与后端页面',
    items: ['机构首页', '合作介绍页', '表单留资页', '品牌展示页'],
  },
]

const steps = [
  { step: '01', title: '先诊断', desc: '先看机构现在的问题到底出在账号、主播、内容、流量，还是转化。' },
  { step: '02', title: '再搭建', desc: '把账号、直播间、官网页面、表单和承接流程全部先搭起来。' },
  { step: '03', title: '边播边调', desc: '不是交付完就结束，而是跟着机构真实开播，一场一场去优化。' },
  { step: '04', title: '形成闭环', desc: '把公域流量引到私域，再把私域转成试听、到店、报名和续费。' },
]

const plans = [
  {
    name: '诊断启动版',
    price: '980元',
    desc: '适合先了解问题、先做诊断的机构',
    bullets: ['机构现状诊断', '账号问题梳理', '赛道定位建议', '基础执行清单'],
  },
  {
    name: '标准陪跑版',
    price: '3980元/月',
    desc: '适合想先跑通直播模式的机构',
    bullets: ['账号方向梳理', '机构首页搭建', '基础直播陪跑', '转化链路建议'],
    highlight: true,
  },
  {
    name: '深度运营版',
    price: '14800元/月',
    desc: '适合想稳定开播并持续转化的机构',
    bullets: ['完整直播方案', '主播训练复盘', '私域承接设计', '数据跟踪优化'],
  },
]

const contactItems = [
  {
    title: '微信咨询',
    value: 'liqianairuoxi',
    desc: '适合直接沟通合作模式、报价和落地流程。',
  },
  {
    title: '手机号',
    value: '18366357883',
    desc: '适合机构负责人直接电话沟通。',
  },
  {
    title: '服务时间',
    value: '周一到周日 9:00 - 21:00',
    desc: '提前发项目情况，沟通会更高效。',
  },
]

export default function App() {
  const [copied, setCopied] = useState(false)

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText('liqianairuoxi')
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.alert('微信号：liqianairuoxi')
    }
  }

  const callPhone = () => {
    window.location.href = 'tel:18366357883'
  }

  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="topbar">
            <div>
              <div className="brand">教育机构直播陪跑</div>
              <div className="subbrand">抖音直播起号 / 招生转化 / 官网搭建 / 私域承接</div>
            </div>
            <button className="btn btn-ghost" onClick={copyWechat}>
              {copied ? '微信已复制' : '立即咨询'}
            </button>
          </div>

          <div className="hero-content">
            <h1>
              帮机构把
              <span>直播间、招生页、转化链路</span>
              <span>一次性搭起来</span>
            </h1>
            <p>
              我做的不是单独的网站，也不是只给你几句直播话术。我这边更偏向直接陪着机构把账号定位、直播内容、主播训练、引流承接、私域转化和官网展示，一整套跑起来，目的只有一个：让机构能自己持续招生、持续成交。
            </p>
            <div className="hero-actions">
              <button className="btn btn-dark" onClick={copyWechat}>
                {copied ? '微信已复制：liqianairuoxi' : '微信咨询：liqianairuoxi'}
              </button>
              <button className="btn btn-light" onClick={callPhone}>电话咨询：18366357883</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">你现在最常见的问题</div>
            <h2>很多机构不是不想做直播，而是根本没人把这件事带着落地</h2>
          </div>
          <div className="grid grid-3">
            {painPoints.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">我具体能帮机构做什么</div>
            <h2>不是做一个好看官网，而是把官网放进你的招生转化里</h2>
          </div>
          <div className="grid grid-4">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <div className="pill-wrap">
                  {service.items.map((item) => (
                    <span className="pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">合作怎么推进</div>
            <h2>四步推进，让机构不是听懂，而是真的做起来</h2>
          </div>
          <div className="grid grid-4">
            {steps.map((item) => (
              <div className="card step-card" key={item.step}>
                <div className="step-num">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">报价方案</div>
            <h2>可以先低成本试跑，也可以直接做深度陪跑</h2>
          </div>
          <div className="grid grid-3">
            {plans.map((plan) => (
              <div className={`price-card ${plan.highlight ? 'featured' : ''}`} key={plan.name}>
                <div className="price-top">
                  <div>
                    <h3>{plan.name}</h3>
                    <div className="price">{plan.price}</div>
                  </div>
                  {plan.highlight ? <span className="badge">主推</span> : null}
                </div>
                <p className="price-desc">{plan.desc}</p>
                <div className="bullet-list">
                  {plan.bullets.map((item) => (
                    <div className="bullet" key={item}>{item}</div>
                  ))}
                </div>
                <button className={`btn ${plan.highlight ? 'btn-white' : 'btn-dark'} full`} onClick={copyWechat}>
                  咨询此方案
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-box">
          <div className="contact-left">
            <div className="eyebrow light">联系我</div>
            <h2>先把机构情况发我，我帮你判断适不适合做</h2>
            <p>
              机构做直播，不是上来就开播就行。你可以先把你现在做的项目、校区情况、老师配置和你想做的方向发我，我先帮你判断是适合先做诊断、先试跑，还是直接做陪跑合作。
            </p>
            <div className="hero-actions">
              <button className="btn btn-white" onClick={copyWechat}>
                {copied ? '微信已复制' : '微信咨询：liqianairuoxi'}
              </button>
              <button className="btn btn-outline-white" onClick={callPhone}>电话咨询：18366357883</button>
            </div>
          </div>
          <div className="contact-right">
            {contactItems.map((item) => (
              <div className="contact-card" key={item.title}>
                <div className="contact-title">{item.title}</div>
                <div className="contact-value">{item.value}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="floating-actions">
        <button className="btn btn-dark" onClick={copyWechat}>{copied ? '微信已复制' : '微信咨询'}</button>
        <button className="btn btn-light" onClick={callPhone}>电话咨询</button>
      </div>
    </div>
  )
}
