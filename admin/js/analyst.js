// Function to render product distribution chart
function renderProductDistributionChart() {
    const canvas = document.getElementById('productDistributionChart');
    const ctx = canvas.getContext('2d');
    const legend = document.getElementById('legend');
    // Calculate the total quantity of each product category sold
    const categoryQuantities = orders.reduce((acc, order) => {
        order.products.forEach(({ id, quantity }) => {
            const product = products.find(p => p.id === id);
            if (product) {
                acc[product.category] = (acc[product.category] || 0) + quantity;
            }
        });
        return acc;
    }, {});

    const colors = [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
    ];

    const padding = 40;
    const outerRadius = Math.min(canvas.width, canvas.height) / 2 - padding;
    const innerRadius = outerRadius / 2;  // Adjust this to make the hole bigger or smaller
    const hoverRadius = outerRadius * 1.1;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const total = Object.values(categoryQuantities).reduce((sum, value) => sum + value, 0);
    let startAngle = 0;
    const slices = [];

    // Function to draw a single pie slice
    function drawSlice(startAngle, sliceAngle, color, outerRadius, innerRadius) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, outerRadius, startAngle, startAngle + sliceAngle);
        ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }

    // Function to draw percentage text
    function drawPercentageText(text, startAngle, sliceAngle, radius) {
        const angle = startAngle + sliceAngle / 2;
        const x = centerX + (radius * 0.7) * Math.cos(angle);
        const y = centerY + (radius * 0.7) * Math.sin(angle);
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x, y);
    }

    // Draw each slice
    function drawChart(highlightedSlice = null) {
        startAngle = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        Object.entries(categoryQuantities).forEach(([category, quantity], index) => {
            const sliceAngle = (quantity / total) * 2 * Math.PI;
            const color = colors[index % colors.length];
            const radius = highlightedSlice === index ? hoverRadius : outerRadius;

            drawSlice(startAngle, sliceAngle, color, radius, innerRadius);
            const percentage = ((quantity / total) * 100).toFixed(2) + '%';
            drawPercentageText(percentage, startAngle, sliceAngle, radius);

            slices[index] = {
                category,
                quantity,
                startAngle,
                endAngle: startAngle + sliceAngle,
                color
            };
            
            startAngle += sliceAngle;
        });
    }

    // Draw legend
    function drawLegend() {
        legend.innerHTML = '';
        slices.forEach(slice => {
            const legendItem = document.createElement('div');
            legendItem.classList.add('legend-item');
            legendItem.innerHTML = `
                <div class="legend-color" style="background-color: ${slice.color};"></div>
                <div class="legend-text">${slice.category}: ${slice.quantity}</div>
            `;
            legend.appendChild(legendItem);
        });
    }

    drawChart();
    drawLegend();

    // Add hover effect
    canvas.addEventListener('mousemove', (event) => {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < outerRadius && distance > innerRadius) {
            const angle = Math.atan2(dy, dx);
            const normalizedAngle = angle < 0 ? angle + 2 * Math.PI : angle;

            slices.forEach((slice, index) => {
                if (normalizedAngle >= slice.startAngle && normalizedAngle <= slice.endAngle) {
                    canvas.style.cursor = 'pointer';
                    drawChart(index);
                    document.getElementById('legend').innerHTML = `
                        <div class="legend-item">
                            <div class="legend-color" style="background-color: ${slice.color};"></div>
                            <div class="legend-text">${slice.category}: ${slice.quantity} (${((slice.quantity / total) * 100).toFixed(2)}%)</div>
                        </div>
                    `;
                }
            });
        } else {
            canvas.style.cursor = 'default';
            drawChart();
            drawLegend();
        }
    });

    canvas.addEventListener('mouseleave', () => {
        drawChart();
        drawLegend();
    });
}

// Initialize chart rendering
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productDistributionChart')) {
        renderProductDistributionChart();
    }
});


function renderRevenueChart() {
    const canvas = document.getElementById('revenueChart');
    const ctx = canvas.getContext('2d');
    const monthSelector = document.getElementById('monthSelector');

    // Updated data structure: revenue by quarter for the year
    const data = {
        '2024': [100000000, 150000000, 200000000, 250000000] // [Q1, Q2, Q3, Q4]
    };

    let selectedYear = '2024';
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    });

    function drawChart() {
        const revenueData = data[selectedYear];
        const numQuarters = revenueData.length;

        // Adjust the width of the bars and space between them
        const barWidth = (canvas.width - 60) / numQuarters;  // Make the bars fit the number of quarters
        const maxRevenue = Math.max(...revenueData);
        const padding = 40;
        const chartHeight = canvas.height - 2 * padding;
        const axisOffset = 30;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';

        revenueData.forEach((revenue, index) => {
            const x = padding + index * barWidth;
            const y = canvas.height - padding;
            const height = (revenue / maxRevenue) * chartHeight;
            const color = index === hoveredBarIndex ? 'rgba(75, 192, 192, 1)' : 'rgba(75, 192, 192, 0.7)';

            ctx.fillStyle = color;
            ctx.fillRect(x, y - height, barWidth - 10, height); // Adjust bar width and spacing

            if (index === hoveredBarIndex) {
                ctx.fillStyle = '#000';
                ctx.fillText(formatter.format(revenue), x + (barWidth - 10) / 2, y - height - 10);
            }
        });

        // Draw X and Y axes
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();

        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
        quarters.forEach((quarter, index) => {
            const x = padding + index * barWidth + (barWidth - 10) / 2;
            ctx.fillText(quarter, x, canvas.height - padding + 20);
        });

        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.stroke();

        // Draw Y-axis labels
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        const numTicks = 5;
        const tickSpacing = chartHeight / numTicks;
        for (let i = 0; i <= numTicks; i++) {
            const y = canvas.height - padding - (i * tickSpacing);
            ctx.fillText(formatter.format((maxRevenue / numTicks) * i), padding - axisOffset, y + 5);
        }
    }

    let hoveredBarIndex = null;
    canvas.addEventListener('mousemove', (event) => {
        const mouseX = event.offsetX;
        const barWidth = (canvas.width - 60) / data[selectedYear].length;

        hoveredBarIndex = null;
        const revenueData = data[selectedYear];
        revenueData.forEach((_, index) => {
            const x = 40 + index * barWidth;
            if (mouseX > x && mouseX < x + barWidth - 10) {
                hoveredBarIndex = index;
            }
        });
        drawChart();
    });

    canvas.addEventListener('mouseleave', () => {
        hoveredBarIndex = null;
        drawChart();
    });

    monthSelector.innerHTML = Object.keys(data).map(year => `<option value="${year}">${year}</option>`).join('');

    monthSelector.addEventListener('change', (event) => {
        selectedYear = event.target.value;
        drawChart();
    });

    drawChart();
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('revenueChart')) {
        renderRevenueChart();
    }
});