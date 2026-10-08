from pathlib import Path
import pymupdf

source = Path("attached_assets/Abhishek_CS_GLAU_(1)_1791457313659.pdf")
output = Path(".agents/outputs/resume-page-1.png")

document = pymupdf.open(source)
for page_number, page in enumerate(document, start=1):
    image = page.get_pixmap(matrix=pymupdf.Matrix(2, 2), alpha=False)
    target = output if page_number == 1 else output.with_name(
        f"resume-page-{page_number}.png"
    )
    image.save(target)
    print(f"Rendered page {page_number} to {target}")
