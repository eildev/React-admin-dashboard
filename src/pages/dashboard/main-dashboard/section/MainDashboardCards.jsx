
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MainDashboardCards = () => {
    const cardsData = [
        { title: 'Assets', icon: 'bi-gear', amount: '$910,21', percentage: '25.32', isPositive: true, timeFrame: '' },
        { title: 'Liability', icon: 'bi-shield', amount: '$27,891', percentage: '18.09', isPositive: true, timeFrame: 'Last 7 days' },
        { title: 'Income', icon: 'bi-wallet2', amount: '$14,567', percentage: '14.12', isPositive: false, timeFrame: 'Last 7 days' },
        { title: 'Expense', icon: 'bi-cart', amount: '$52,731', percentage: '11.37', isPositive: false, timeFrame: 'Last 7 days' },
    ];

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {cardsData.map((card, index) => (
                    <div className="col" key={index}>
                        <div className="card shadow-sm p-3 pb-0" style={{ borderRadius: '15px' }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className=" fs-6">{card.title}</h6>
                                    <h3 className="fw-bold fs-3 mt-3">{card.amount}</h3>
                                    <p className={card.isPositive ? 'text-success' : 'text-danger'}>
                                        {card.isPositive ? '+' : ''}{card.percentage}% {card.timeFrame}
                                    </p>
                                </div>
                                <div>
                                    <i className={`bi ${card.icon} fs-2 text-primary`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainDashboardCards;