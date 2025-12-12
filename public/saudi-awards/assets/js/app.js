/**
 * جوائز السعودية - Saudi Awards
 * Main JavaScript Application
 */

// ==================== AWARDS DATA ====================
const awardsData = [
    {
        id: 1,
        name: "الجوائز الثقافية الوطنية",
        description: "جائزة وطنيّة لتكريم وتشجيع الإنجازات والإبداعات الثقافيّة في مختلف القطاعات بالسعوديّة؛ لتعزيز دور الثقافة في تحقيق رؤية المملكة 2030 وتعزيز مكانتها الدوليّة.",
        sector: "قطاع الثقافة",
        owner: "وزارة الثقافة",
        targetAudience: "الأفراد، المؤسسات",
        targetType: "المثقفون والفنانون، المؤسسات الربحيّة وغير الربحيّة، المجموعات الثقافية",
        value: "غير موضح",
        scope: "وطنيّة",
        cycle: "سنويّة",
        nominationMethod: "الترشيح الذاتي، الترشيح من اللجنات، الترشيح من الجهات، الترشيح من الأفراد",
        website: "https://www.moc.gov.sa/Modules/Pages/Cultural-Awards",
        notes: ""
    },
    {
        id: 2,
        name: "جائزة إرث",
        description: "جائزة للتوثيق البصري لكافة عناصر محمية الملك سلمان بن عبدالعزيز الملكية وعكس المناظر الجمالية والآثار والحياة الفطرية داخل حدود المحميّة.",
        sector: "قطاع الثقافة",
        owner: "هيئة تطوير محمية الملك سلمان بن عبدالعزيز الملكية",
        targetAudience: "الأفراد",
        targetType: "المصورون",
        value: "232,000",
        scope: "وطنيّة",
        cycle: "غير موضح",
        nominationMethod: "الترشيح الذاتي",
        website: "https://permits.ksrnr.gov.sa/ar/competition#about",
        notes: ""
    },
    {
        id: 3,
        name: "جائزة الملك فيصل",
        description: "جائزة لتكريم العلماء على إنجازاتهم الفريدة في مجالاتٍ عديدة: خدمة الإسلام، الدراسات الإسلامية، اللغة العربية والأدب، والطب والعلوم.",
        sector: "قطاع الثقافة",
        owner: "مؤسسة الملك فيصل الخيريّة",
        targetAudience: "الأفراد",
        targetType: "العلماء",
        value: "3,750,000",
        scope: "عالميّة",
        cycle: "سنويّة",
        nominationMethod: "الترشيح من اللجنات",
        website: "https://kingfaisalprize.org/",
        notes: ""
    },
    {
        id: 4,
        name: "جائزة عبدالله بن إدريس الثقافية",
        description: "جائزة تستحث المثقفين في إثراء الميادين الثقافيّة المتنوّعة بإنتاجاتٍ إبداعيّة أصيلة تخدم الثقافة العربيّة وتعزّز مكانتها العالميّة.",
        sector: "قطاع الثقافة",
        owner: "مركز عبد الله بن إدريس الثقافي",
        targetAudience: "الأفراد",
        targetType: "شعراء الفصحى",
        value: "300,000",
        scope: "عربيّة",
        cycle: "كل سنتين",
        nominationMethod: "الترشيح الذاتي، الترشيح من الجهات",
        website: "https://binidrees.org/",
        notes: ""
    },
    {
        id: 5,
        name: "جائزة الأمير عبد الله الفيصل للشعر العربي",
        description: "جائزة أدبيّة؛ لتكريم المبدعين والمتميّزين في المجالات الشعريّة العربيّة الفصيحة.",
        sector: "قطاع الثقافة",
        owner: "أكاديمية الشعر العربي",
        targetAudience: "الأفراد",
        targetType: "شعراء الفصحى",
        value: "1,500,000",
        scope: "عالميّة",
        cycle: "سنويّة",
        nominationMethod: "الترشيح الذاتي، الترشيح من الجهات",
        website: "https://pap.tu.edu.sa/#aboutprize",
        notes: ""
    },
    {
        id: 6,
        name: "جائزة الملك عبدالعزيز للجودة",
        description: "جائزة وطنية تهدف لتحفيز المنظمات على تطبيق معايير الجودة والتميز المؤسسي لتحسين الأداء ورفع مستوى التنافسية.",
        sector: "قطاع الأعمال",
        owner: "الهيئة السعودية للمواصفات والمقاييس والجودة",
        targetAudience: "المؤسسات",
        targetType: "المنظمات الربحية وغير الربحية",
        value: "غير موضح",
        scope: "وطنيّة",
        cycle: "سنويّة",
        nominationMethod: "الترشيح الذاتي",
        website: "https://www.saso.gov.sa",
        notes: ""
    }
];

// ==================== UTILITY FUNCTIONS ====================

/**
 * Format currency value
 */
function formatValue(value) {
    if (!value || value === "غير موضح") {
        return "غير موضح";
    }
    const num = parseInt(value.replace(/,/g, ''));
    if (isNaN(num)) return value;
    return num.toLocaleString('ar-SA') + ' ريال';
}

/**
 * Create award card HTML
 */
function createAwardCard(award) {
    const websiteBtn = award.website 
        ? `<a href="${award.website}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
             <i class="bi bi-box-arrow-up-left me-1"></i>
             زيارة الموقع
           </a>`
        : '';
    
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <article class="award-card">
                <div class="award-card__header">
                    <h3 class="award-card__title">${award.name}</h3>
                    <span class="award-card__sector">
                        <i class="bi bi-tag-fill"></i>
                        ${award.sector}
                    </span>
                </div>
                <div class="award-card__body">
                    <p class="award-card__owner">
                        <i class="bi bi-building"></i>
                        ${award.owner}
                    </p>
                    <span class="award-card__scope">
                        <i class="bi bi-globe2"></i>
                        ${award.scope}
                    </span>
                </div>
                <div class="award-card__footer">
                    <button class="btn btn-primary btn-sm" onclick="showAwardDetails(${award.id})">
                        <i class="bi bi-info-circle me-1"></i>
                        تفاصيل الجائزة
                    </button>
                    ${websiteBtn}
                </div>
            </article>
        </div>
    `;
}

/**
 * Show award details in modal - Modern design without table
 */
function showAwardDetails(awardId) {
    const award = awardsData.find(a => a.id === awardId);
    if (!award) return;
    
    const modal = document.getElementById('awardDetailsModal');
    const content = document.getElementById('awardDetailsContent');
    const visitBtn = document.getElementById('visitAwardSite');
    const modalTitle = document.getElementById('awardDetailsModalLabel');
    
    modalTitle.textContent = award.name;
    
    // Build modern details layout
    const items = [
        { label: 'الوصف', value: award.description, icon: 'bi-file-text' },
        { label: 'القطاع', value: award.sector, icon: 'bi-grid' },
        { label: 'الجهة المالكة', value: award.owner, icon: 'bi-building' },
        { label: 'الفئة المستهدفة', value: award.targetAudience, icon: 'bi-people' },
        { label: 'نوع الفئة', value: award.targetType, icon: 'bi-person-badge' },
        { label: 'قيمة الجائزة', value: formatValue(award.value), icon: 'bi-currency-dollar' },
        { label: 'النطاق', value: award.scope, icon: 'bi-globe2' },
        { label: 'الدورة', value: award.cycle, icon: 'bi-calendar-event' },
        { label: 'طريقة الترشيح', value: award.nominationMethod, icon: 'bi-clipboard-check' }
    ];
    
    // Add website if exists
    if (award.website) {
        items.push({ 
            label: 'الموقع الإلكتروني', 
            value: `<a href="${award.website}" target="_blank" rel="noopener">${award.website}</a>`,
            icon: 'bi-link-45deg'
        });
    }
    
    // Add notes if exists
    if (award.notes && award.notes.trim() !== '') {
        items.push({ label: 'ملاحظات', value: award.notes, icon: 'bi-sticky' });
    }
    
    let html = '';
    items.forEach(item => {
        if (item.value && item.value !== '—') {
            html += `
                <div class="award-details__item">
                    <div class="award-details__label">
                        <i class="bi ${item.icon} me-2"></i>
                        ${item.label}
                    </div>
                    <div class="award-details__value">${item.value}</div>
                </div>
            `;
        }
    });
    
    content.innerHTML = html;
    
    // Update visit button
    if (award.website) {
        visitBtn.href = award.website;
        visitBtn.classList.remove('d-none');
    } else {
        visitBtn.classList.add('d-none');
    }
    
    // Show modal
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

/**
 * Filter awards based on search and sector
 */
function filterAwards(searchTerm, sector) {
    return awardsData.filter(award => {
        const searchMatch = !searchTerm || 
            award.name.includes(searchTerm) ||
            award.sector.includes(searchTerm) ||
            award.owner.includes(searchTerm) ||
            award.scope.includes(searchTerm);
        
        const sectorMatch = !sector || award.sector === sector;
        
        return searchMatch && sectorMatch;
    });
}

/**
 * Render awards grid
 */
function renderAwards(awards) {
    const grid = document.getElementById('awardsGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!grid) return;
    
    if (awards.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.classList.remove('d-none');
        if (resultsCount) resultsCount.textContent = '0';
    } else {
        grid.innerHTML = awards.map(award => createAwardCard(award)).join('');
        if (noResults) noResults.classList.add('d-none');
        if (resultsCount) resultsCount.textContent = awards.length;
    }
}

/**
 * Initialize awards page
 */
function initAwardsPage() {
    const searchInput = document.getElementById('searchInput');
    const sectorFilter = document.getElementById('sectorFilter');
    const resetBtn = document.getElementById('resetBtn');
    
    if (!searchInput) return;
    
    // Check for search query in URL
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q');
    if (queryParam) {
        searchInput.value = queryParam;
    }
    
    // Initial render
    const filteredAwards = filterAwards(searchInput.value, sectorFilter ? sectorFilter.value : '');
    renderAwards(filteredAwards);
    
    // Search input event
    searchInput.addEventListener('input', function() {
        const filteredAwards = filterAwards(this.value, sectorFilter ? sectorFilter.value : '');
        renderAwards(filteredAwards);
    });
    
    // Sector filter event
    if (sectorFilter) {
        sectorFilter.addEventListener('change', function() {
            const filteredAwards = filterAwards(searchInput.value, this.value);
            renderAwards(filteredAwards);
        });
    }
    
    // Reset button
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            searchInput.value = '';
            if (sectorFilter) sectorFilter.value = '';
            renderAwards(awardsData);
        });
    }
}

// ==================== ADD AWARD FORM ====================

document.addEventListener('DOMContentLoaded', function() {
    // Handle add award form submission
    const submitBtn = document.getElementById('submitAwardBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            const form = document.getElementById('addAwardForm');
            
            // Check form validity
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('addAwardModal'));
            modal.hide();
            
            // Reset form
            form.reset();
            
            // Show success toast
            const toast = new bootstrap.Toast(document.getElementById('successToast'));
            toast.show();
        });
    }
    
    // Initialize awards page if on awards.html
    initAwardsPage();
});
