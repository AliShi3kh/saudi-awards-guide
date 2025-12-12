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
        ? `<a href="${award.website}" class="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">
             <i class="bi bi-box-arrow-up-left me-1"></i>
             زيارة الموقع
           </a>`
        : '';
    
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <article class="award-card">
                <div class="award-card__header">
                    <h3 class="award-card__title">${award.name}</h3>
                    <span class="award-card__sector">${award.sector}</span>
                </div>
                <div class="award-card__body">
                    <p class="award-card__owner">
                        <i class="bi bi-building"></i>
                        ${award.owner}
                    </p>
                    <span class="award-card__scope">
                        <i class="bi bi-globe2 me-1"></i>
                        ${award.scope}
                    </span>
                </div>
                <div class="award-card__footer">
                    <button class="btn btn-primary" onclick="showAwardDetails(${award.id})">
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
 * Show award details in modal
 */
function showAwardDetails(awardId) {
    const award = awardsData.find(a => a.id === awardId);
    if (!award) return;
    
    const modal = document.getElementById('awardDetailsModal');
    const content = document.getElementById('awardDetailsContent');
    const visitBtn = document.getElementById('visitAwardSite');
    const modalTitle = document.getElementById('awardDetailsModalLabel');
    
    modalTitle.textContent = award.name;
    
    // Build details table
    const rows = [
        { label: 'م', value: award.id },
        { label: 'اسم الجائزة', value: award.name },
        { label: 'وصف مختصر للجائزة', value: award.description },
        { label: 'القطاع', value: award.sector },
        { label: 'الجهة المالكة لها', value: award.owner },
        { label: 'الفئة المستهدفة', value: award.targetAudience },
        { label: 'نوع الفئة المستهدفة', value: award.targetType },
        { label: 'مجموع قيمة الجائزة', value: formatValue(award.value) },
        { label: 'نطاق الجائزة', value: award.scope },
        { label: 'دورة الجائزة', value: award.cycle },
        { label: 'طريقة الترشيح', value: award.nominationMethod },
        { label: 'موقع الجائزة', value: award.website ? `<a href="${award.website}" target="_blank" rel="noopener">${award.website}</a>` : '—' }
    ];
    
    // Add notes row only if notes exist
    if (award.notes && award.notes.trim() !== '') {
        rows.push({ label: 'الملاحظات', value: award.notes });
    }
    
    let tableHTML = '<table class="award-details__table">';
    rows.forEach(row => {
        tableHTML += `
            <tr>
                <th scope="row">${row.label}</th>
                <td>${row.value || '—'}</td>
            </tr>
        `;
    });
    tableHTML += '</table>';
    
    content.innerHTML = tableHTML;
    
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
        noResults.classList.remove('d-none');
        resultsCount.textContent = '0';
    } else {
        grid.innerHTML = awards.map(award => createAwardCard(award)).join('');
        noResults.classList.add('d-none');
        resultsCount.textContent = awards.length;
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
    const filteredAwards = filterAwards(searchInput.value, sectorFilter.value);
    renderAwards(filteredAwards);
    
    // Search input event
    searchInput.addEventListener('input', function() {
        const filteredAwards = filterAwards(this.value, sectorFilter.value);
        renderAwards(filteredAwards);
    });
    
    // Sector filter event
    sectorFilter.addEventListener('change', function() {
        const filteredAwards = filterAwards(searchInput.value, this.value);
        renderAwards(filteredAwards);
    });
    
    // Reset button
    resetBtn.addEventListener('click', function() {
        searchInput.value = '';
        sectorFilter.value = '';
        renderAwards(awardsData);
    });
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
});
